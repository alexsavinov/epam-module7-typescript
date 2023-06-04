Create a **BritishCompany** project based on the **EuropeCompany** project. 

a. The **Company** class must be parameterized by **Location** — the location of the company’s office. 
  Create **ILocation** interface with the following methods: 
- **addPerson** - method which adds a person; 
- **getPerson** - method for getting a person by index; 
- **getCount** - method of counting the number of employees; 

b. Location should implement the **ILocation** interface. 

c. Create 2 classes with different locations: 
- **CompanyLocationArray** class which implements **ILocation** interface - for storage in Array; 
- **CompanyLocationLocalStorage** class which implements **ILocation** interface - for storage in localStorage. 

d. Update class **Company** with using Location. 

e. Remove **Frontend** and **Backend** classes. 

f. Create several **Companies** with different locations. 

g. Add several employees to each company. 

h. Display the results of the **getProjectList** and **getNameList** methods in the console. 

i. Do not create **Frontend** and **Backend** employees, just work with the **Employee** class. 

j. The **Employee** class does not use public properties, only public methods.
