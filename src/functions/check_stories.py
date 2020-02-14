import instaloader
from instaloader import Profile
from pymongo import MongoClient
import os
import ssl

'''
Must be running a local mongoDB connection for this to work. That means running
"mongo [uri]" in another terminal then running this python code separately. 

Need mongoDB installed for that to work.

'''

class database_connection():

  def __init__(self, uri):
    self.uri = uri
    self.client = MongoClient(uri, ssl=True, ssl_cert_reqs=ssl.CERT_NONE, ssl_match_hostname=False)
    self.connect()

  def connect(self):
    self.client = MongoClient(self.uri) # Connect with pymongo
    self.db = self.client.nanovert1
    print("Running client")

  def get_claims(self):
    claimsdb = self.db.claims
    claims = claimsdb.find() # Gets all claims (iterable object)
    for i in claims:
      print(i.username)
    

dr_mongo = database_connection("mongodb+srv://napierb:napierb@cluster1-uwfcm.mongodb.net/nanovert1?retryWrites=true&w=majority")
dr_mongo.get_claims()

class gram_scraper():

  def __init__(self, username, password):
    self.username = username
    self.password = password
    self.download_location = "stories"

    L = instaloader.Instaloader()
    self.L = L
    L.login(username, password)
  
  def get_profile(self, username):
    profile = Profile.from_username(self.L.context, username)
    return profile
  
  def get_stories(self, username):
    profile = self.get_profile(username)
    stories = self.L.get_stories(userids=[profile.userid])
    print("Load successful")
    return stories

  def download_stories(self, username):
    profile = self.get_profile(username)
    stories = self.L.download_stories(userids=[profile.userid], filename_target=self.download_location)
    print("Download successful")
    return "Stories have been downloaded"

# dr_scrape = gram_scraper("nanovertuk", "extrovert")

# dat = dr_scrape.download_stories("Francis.barnett_")






