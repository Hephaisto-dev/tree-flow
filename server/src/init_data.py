from os import close, read

class Temperature:
    def __init__(self):
        """Récupere les données dans les fichiers temperature_paris.csv"""

        self.data = {
            "AvgTempérature": None,
            "MinTemperature": None,
            "MaxTemperature": None,
            "Precipitation": None,
            "Humidity": None,
            "RainDay": None,
            }
        try:
            file = open("./data/température_paris.csv", "r")
        except:
            return
        infile = file.read()
        colum = infile.split("\n")
        file.close()
        self.data["AvgTempérature"] = [float(i) for i in colum[0].split(", ")]
        self.data["MinTemperature"] = [float(i) for i in colum[1].split(", ")]
        self.data["MaxTemperature"] = [float(i) for i in colum[2].split(", ")]
        self.data["Precipitation"] = [float(i) for i in colum[3].split(", ")]
        self.data["Humidity"] = [float(i) for i in colum[4].split(", ")]
        self.data["RainDay"] = [float(i) for i in colum[5].split(", ")]