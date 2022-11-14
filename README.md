# Querying Global Warming Datasets in noSQL
Created noSQL Scripts to generate queries from 5 datasets regarding global warming using MongoDB.

## Query Results
1) Collection considered: greenhouse_gas_inventory_data_data    
What are the unique {categories}? 

![image](https://user-images.githubusercontent.com/84263856/201738626-5022ca7a-b4ff-45eb-9502-daf59d74c0d9.png)

2) Collection considered: greenhouse_gas_inventory_data_data     
What is the sum of emission {value} in the {year} 2010 to 2014 for European Union?  

![image](https://user-images.githubusercontent.com/84263856/201738645-da4c5fac-bbae-49f8-af2d-c22ec39673f8.png)

3) Collection considered: greenhouse_gas_inventory_data_data    
What are the {year}, {category}, and {value} for Australia where emission {value} is 
greater than 530,000? 

![image](https://user-images.githubusercontent.com/84263856/201738656-077d4ed9-d526-4d15-90a3-6c972a5dacf5.png)

4) Collection considered: mass_balance_data    
Display a list of glaciers {name}, {investigator}, and amount of surveyed on the 
glacier done by the investigator, when the investigator has conducted more than 11 
surveys on the glacier. Sort the output in alphabetic order of {name}.

![image](https://user-images.githubusercontent.com/84263856/201738690-2568a741-be8a-4b7f-ab36-f51cfc144d37.png)

5) Collection considered: temperaturechangebycountry     
For each year (2010 to 2014), display a list of {area}, {year}, average {value} of 
temperature change of the ASEAN countries. Include the overall average of temperature change of all the ASEAN countries of each year.

![image](https://user-images.githubusercontent.com/84263856/201738699-57caffe0-b4e7-434d-9580-eb0f0a3215e3.png)

## Datasets Sources:
1. International Greenhouse Gas Emissions https://www.kaggle.com/datasets/unitednations/international-greenhouse-gasemissions?ref=hackernoon.com&select=greenhouse_gas_inventory_data_data.csv 
2. Temperature change statistics 1961–2021. Global, regional and country trends https://www.fao.org/food-agriculture-statistics/data-release/data-releasedetail/en/c/1492093/ 
3. Climate Change: Earth Surface Temperature Data https://www.kaggle.com/datasets/berkeleyearth/climate-change-earth-surfacetemperature-data?ref=hackernoon.com 
4. Daily Sea Ice Extent Data https://www.kaggle.com/datasets/nsidcorg/daily-sea-ice-extentdata?ref=hackernoon.com 
5. Glaciers elevation and mass change data from 1850 to present from the Fluctuations of Glaciers Database https://cds.climate.copernicus.eu/cdsapp#!/dataset/insitu-glaciers-elevationmass?tab=overview
