import numpy as np
from flask import Flask,abort,jsonify,request
import json
from flask_cors import CORS, cross_origin


#Import the libraries
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer

#load the data
#store the data 
df = pd.read_csv('styless.csv')
#show the first 3 rows of data
print(df.head(3))

#get a count of the number of rows in the data set and the number of columns
df.shape

#create a list of important columns for the recommendation engine
columns =['gender','subCategory','articleType','baseColour','usage']

#show the data 
df[columns].head(3)

#check for any missing values in the important columns
df[columns].isnull().values.any()

#create a function to combine the values of the important columns into a single string
def get_important_features(data):
  important_features =[]
  for i in range(0, data.shape[0]):
    important_features.append(str(data['gender'][i])+' '+str(data['subCategory'][i])+' '+str(data['articleType'][i])+' '+str(data['baseColour'][i])+' '+str(data['usage'][i]))
    
  return important_features

#create a column to hold the combined strings
df['important_features'] = get_important_features(df)
#show the data
df.head(3)

#convert the text to a matrix of token counts
cm= CountVectorizer().fit_transform(df['important_features'])

#get the cosine similarity matrix from the count matrix
cs = cosine_similarity(cm)
#print the cosine similarity matrix
print(cs)

#get the shape of similarity matrix 
cs.shape

#get the year 
#year=2011
df['id']=df.index
df.head(3)
#find the rows id
#info_id=df[df.year == year]['id'].values[0]

#create a list of enumations for the similarity score [ (id),(similarity score), ... ]
#scores = list(enumerate(cs[info_id]))

#sort the list
#sorted_scores = sorted(scores,key = lambda x:x[1],reverse = True)
#sorted_scores = sorted_scores[1:]

#print the sorted scores
#print(sorted_scores)

#create a loop to print the 7 first similar info
#j=0
#print('the 7 most recomended info to the year ',year,'are:\n')
#for item in sorted_scores:
#  variable = df[df.id == item[0]]['industry_code_ANZSIC'].values[0]
#  print(j+1,variable)
#  j = j+1
#  if j>6:
#    break
    
    

app = Flask(__name__)
CORS(app, support_credentials=True)


@app.route('/api',methods=['GET'])
@cross_origin(supports_credentials=True)
def getRecommandation():
    usage=request.args.get("usage")
    gender=request.args.get("gender")
    
    info_id=df[(df.gender == gender) & (df.usage==usage)]['id'].values[0]
    scores = list(enumerate(cs[info_id]))
    
    sorted_scores = sorted(scores,key = lambda x:x[1],reverse = True)
    sorted_scores = sorted_scores[1:]
    print(len(sorted_scores))
    j=0
    variable=[]
    for item in sorted_scores:
        variable.append({'gender':df[df.id == item[0]]['gender'].values[0],'subCategory':df[df.id == item[0]]['subCategory'].values[0],'articleType':df[df.id == item[0]]['articleType'].values[0],'baseColour':df[df.id ==item[0]]['baseColour'].values[0],'usage':df[df.id ==item[0]]['usage'].values[0],'productDisplayName':df[df.id ==item[0]]['productDisplayName'].values[0],'link':df[df.id ==item[0]]['link'].values[0]})
        j = j+1
        if j>6:
            break
       
    return jsonify(variable)


if __name__ == '__main__':
    app.run(port=9000,debug=True)