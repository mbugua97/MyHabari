import pandas as pd
import numpy as np
import re
from sklearn.model_selection import train_test_split
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, LSTM, Dense, Dropout
from tensorflow.keras.callbacks import ModelCheckpoint
from tensorflow.keras.models import load_model

# Step 1: Load and preprocess the dataset
def clean_text(text):
    # Remove special characters and convert to lowercase
    text = re.sub(r'\W', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    return text.lower()

# Load the dataset from a CSV file
file_path = '../datasets/train.csv'  # Replace with your file path
data = pd.read_csv(file_path)

# Display the first few rows to verify loading
print(data.head())

# Preprocess the text data
data['Title'] = data['Title'].apply(clean_text)
data['Description'] = data['Description'].apply(clean_text)

# Combine Title and Description into a single feature
data['Combined'] = data['Title'] + " " + data['Description']

# Convert class labels (Class Index) to a categorical format
data['Class'] = data['Class Index'] - 1  # Convert to 0-based index

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(data['Combined'], data['Class'], test_size=0.2, random_state=42)

# Step 2: Tokenize and pad sequences
tokenizer = Tokenizer(num_words=10000, oov_token="<OOV>")
tokenizer.fit_on_texts(X_train)

# Convert text to sequences
X_train_seq = tokenizer.texts_to_sequences(X_train)
X_test_seq = tokenizer.texts_to_sequences(X_test)

# Pad the sequences to ensure uniform length
max_length = 200
X_train_pad = pad_sequences(X_train_seq, maxlen=max_length, padding='post', truncating='post')
X_test_pad = pad_sequences(X_test_seq, maxlen=max_length, padding='post', truncating='post')

# Step 3: Define and train the model
model = Sequential([
    Embedding(input_dim=10000, output_dim=128, input_length=max_length),
    LSTM(128, return_sequences=False),
    Dropout(0.5),
    Dense(4, activation='softmax')  # 4 classes
])

model.compile(loss='sparse_categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

# Define a checkpoint callback to save the best model during training
checkpoint_path = "best_model.keras"  # Changed to .keras extension
checkpoint_callback = ModelCheckpoint(checkpoint_path, monitor='val_accuracy', save_best_only=True, mode='max', verbose=1)

# Train the model
history = model.fit(X_train_pad, y_train, epochs=10, validation_data=(X_test_pad, y_test), batch_size=64, callbacks=[checkpoint_callback])

# Save the trained model to a file in .h5 format
model.save('news_classification_model.h5')  # You can still save the final model as .h5

print("Model trained and saved successfully!")

