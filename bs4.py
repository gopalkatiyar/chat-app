# from bs4 import BeautifulSoup
import requests

url = 'https://www.nseindia.com/'

response = requests.get(url=url)

print(response.status_code)