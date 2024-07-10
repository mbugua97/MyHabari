from rest_framework.response import Response
from rest_framework.decorators import APIView

#model deps
import numpy as np
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import load_model
import re


class ClassifyNews(APIView):
    def post(self,request):    
        #predicted_category = predict_category(sample_text, model, tokenizer)
        return Response({"model-class":"unclassified"})