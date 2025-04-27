import pathlib as pth 



Path=pth.Path().cwd()/ 'Classification' / 'static/data'
class datasets:
   def __init__(self):
      
      self.data={}
   def retriveData(self):
      Cats=Path/'cats'
      catsList=[]
      Dogs=Path/'dogs'
      dogsList=[]
      for file in Dogs.iterdir():
           dogsList.append(f"/static/data/dogs/{file.name}")
      for file in Cats.iterdir():
           catsList.append(f"/static/data/cats/{file.name}")
      self.data= {'cats':catsList,'dogs':dogsList}

# datas= datasets()
# print(datas.data)
# datas.retriveData()
# print(datas.data)