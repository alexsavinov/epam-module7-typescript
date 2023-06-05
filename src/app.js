var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        return "(name: ".concat(this.getName(), ", currentProject: ").concat(this.getCurrentProject(), ")");
    };
    return Employee;
}());
var Backend = /** @class */ (function (_super) {
    __extends(Backend, _super);
    function Backend() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toString = function () {
            return "Backend ".concat(_super.prototype.toString.call(_this), ")");
        };
        return _this;
    }
    return Backend;
}(Employee));
var Frontend = /** @class */ (function (_super) {
    __extends(Frontend, _super);
    function Frontend() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toString = function () {
            return "Frontend ".concat(_super.prototype.toString.call(_this));
        };
        return _this;
    }
    return Frontend;
}(Employee));
var Company = /** @class */ (function () {
    function Company() {
        this.toString = function () {
            return "EuropeCompany";
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
img.src = 'europe-flag-icon.svg';
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
