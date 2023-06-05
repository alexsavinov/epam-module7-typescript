var Backend = /** @class */ (function () {
    function Backend(name, currentProject) {
        var _this = this;
        this.toString = function () {
            return "Backend (name: ".concat(_this.getName(), ", currentProject: ").concat(_this.getCurrentProject(), "))");
        };
        this.name = name;
        this.currentProject = currentProject;
    }
    Backend.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    Backend.prototype.getName = function () {
        return this.name;
    };
    return Backend;
}());
var Frontend = /** @class */ (function () {
    function Frontend(name, currentProject) {
        var _this = this;
        this.toString = function () {
            return "Frontend (name: ".concat(_this.getName(), ", currentProject: ").concat(_this.getCurrentProject(), "))");
        };
        this.name = name;
        this.currentProject = currentProject;
    }
    Frontend.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    Frontend.prototype.getName = function () {
        return this.name;
    };
    return Frontend;
}());
var Company = /** @class */ (function () {
    function Company() {
        this.toString = function () {
            return "AmericanCompany";
        };
        this.employees = [];
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
img.src = 'united-states-flag-icon.svg';
img.height = 100;
img.width = 100;
document.body.appendChild(img);
/* Create an object of class Company */
var company = new Company();
/* Create several objects Frontend and Backend employees with information about their names and projects */
var employee1 = new Frontend("employee1", "Project #1");
var employee2 = new Frontend("employee2", "Project #2");
var employee3 = new Backend("employee3", "Project #3");
var employee4 = new Backend("employee4", "Project #2");
/* And add them to the company */
company.add(employee1);
company.add(employee2);
company.add(employee3);
company.add(employee4);
/*  Display the result of the getProjectList and getNameList methods in the console. */
console.log(company.getProjectList());
console.log(company.getNameList());
appendChildToBody('h2', "".concat(company));
appendChildToBody('h3', "Project list: ".concat(company.getProjectList().join(', ')));
appendChildToBody('h3', "Name list: ".concat(company.getNameList().join(', ')));
appendChildToBody('hr');
appendChildToBody('h2', 'Employees');
appendChildToBody('h3', "".concat(employee1));
appendChildToBody('h3', "".concat(employee2));
appendChildToBody('h3', "".concat(employee3));
appendChildToBody('h3', "".concat(employee4));
appendChildToBody('hr');
