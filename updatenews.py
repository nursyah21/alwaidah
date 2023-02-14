from bs4 import BeautifulSoup
import urllib.request, urllib.error, urllib.parse

url = 'https://www.demokrat.or.id/release'

response = urllib.request.urlopen(url)
webContent = response.read().decode('UTF-8')

soup = BeautifulSoup(webContent, 'html.parser')

data = []
for i in soup.find_all('article'):
  img=i.find('img').get('data-src')
  i = i.find('div',attrs={'class':'post-content'})
  link = i.find('a').get('href')
  title = i.find('a').getText()
  date = i.findAll('span')[3].getText()
  data.append(
      {"img":img, "link":link, "title":title, "date": date}
  )

print("var data = ", data)