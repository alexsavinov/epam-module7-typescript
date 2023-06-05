var Employee = /** @class */ (function () {
    function Employee(name, currentProject) {
        this.name = name;
        this.currentProject = currentProject;
    }
    Employee.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.toString = function () {
        return "Employee (name: ".concat(this.getName(), ", currentProject: ").concat(this.getCurrentProject(), ")");
    };
    return Employee;
}());
var CompanyLocationArray = /** @class */ (function () {
    function CompanyLocationArray() {
        this.persons = new Array();
    }
    CompanyLocationArray.prototype.addPerson = function (person) {
        this.persons.push(person);
    };
    CompanyLocationArray.prototype.getCount = function () {
        return this.persons.length;
    };
    CompanyLocationArray.prototype.getPerson = function (index) {
        return this.persons[index];
    };
    CompanyLocationArray.prototype.toString = function () {
        return "CompanyLocationArray";
    };
    return CompanyLocationArray;
}());
var CompanyLocationLocalStorage = /** @class */ (function () {
    function CompanyLocationLocalStorage() {
        this.setPersons(new Array());
    }
    CompanyLocationLocalStorage.prototype.addPerson = function (person) {
        var persons = this.getPersons();
        persons.push(person);
        this.setPersons(persons);
    };
    CompanyLocationLocalStorage.prototype.getCount = function () {
        return this.getPersons().length;
    };
    CompanyLocationLocalStorage.prototype.getPerson = function (index) {
        return this.getPersons()[index];
    };
    CompanyLocationLocalStorage.prototype.getPersons = function () {
        return JSON.parse(localStorage.getItem('persons'));
    };
    CompanyLocationLocalStorage.prototype.setPersons = function (persons) {
        localStorage.setItem('persons', JSON.stringify(persons));
    };
    CompanyLocationLocalStorage.prototype.toString = function () {
        return "CompanyLocationLocalStorage";
    };
    return CompanyLocationLocalStorage;
}());
var Company = /** @class */ (function () {
    function Company(location) {
        var _this = this;
        this.toString = function () {
            return "BritishCompany (location: ".concat(_this.location, ")");
        };
        this.employees = [];
        this.location = location;
    }
    Company.prototype.add = function (employee) {
        this.employees.push(employee);
    };
    Company.prototype.getProjectList = function () {
        return this.employees
            .map(function (item) { return item.getCurrentProject(); })
            .filter(function (value, i, currentValue) { return currentValue.indexOf(value) === i; });
    };
    Company.prototype.getNameList = function () {
        return this.employees.map(function (employee) { return employee.getName(); });
    };
    return Company;
}());
function appendChildToBody(tagName, innerText) {
    if (innerText === void 0) { innerText = ''; }
    var companyElement = document.createElement(tagName);
    if (innerText) {
        companyElement.innerText = innerText;
    }
    document.body.appendChild(companyElement);
}
var img = document.createElement('img');
img.src = 'united-kingdom-flag-icon.svg';
img.height = 100;
img.width = 100;
document.body.appendChild(img);
var location1 = new CompanyLocationArray();
var location2 = new CompanyLocationLocalStorage();
/* Create several Companies with different locations.*/
var company1 = new Company(location1);
var company2 = new Company(location2);
/* Create several objects Frontend and Backend employees with information about their names and projects */
var employee1 = new Employee("employee1", "Project #1");
var employee2 = new Employee("employee2", "Project #2");
var employee3 = new Employee("employee3", "Project #3");
var employee4 = new Employee("employee4", "Project #2");
/* Add several employees to each company.*/
company1.add(employee1);
company1.add(employee2);
company1.add(employee3);
location1.addPerson(employee1);
location2.addPerson(employee2);
location2.addPerson(employee3);
company2.add(employee2);
company2.add(employee3);
company2.add(employee4);
/*  Display the result of the getProjectList and getNameList methods in the console. */
console.log(company1.getProjectList());
console.log(company1.getNameList());
console.log(company2.getProjectList());
console.log(company2.getNameList());
appendChildToBody('h2', "".concat(company1));
appendChildToBody('h3', "Project list: ".concat(company1.getProjectList().join(', ')));
appendChildToBody('h3', "Name list: ".concat(company1.getNameList().join(', ')));
appendChildToBody('h3', "location1 getCount: ".concat(location1.getCount()));
appendChildToBody('hr');
appendChildToBody('h2', "".concat(company2));
appendChildToBody('h3', "Project list: ".concat(company2.getProjectList().join(', ')));
appendChildToBody('h3', "Name list: ".concat(company2.getNameList().join(', ')));
appendChildToBody('h3', "location2 getCount: ".concat(location2.getCount()));
appendChildToBody('hr');
appendChildToBody('h2', 'Employees');
appendChildToBody('h3', "".concat(employee1));
appendChildToBody('h3', "".concat(employee2));
appendChildToBody('h3', "".concat(employee3));
appendChildToBody('h3', "".concat(employee4));
appendChildToBody('hr');
