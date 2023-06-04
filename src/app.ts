class Employee {
    private readonly currentProject: string;
    private readonly name: string;

    constructor(name: string, currentProject: string) {
        this.name = name;
        this.currentProject = currentProject;
    }

    getCurrentProject(): string {
        return this.currentProject;
    }

    getName(): string {
        return this.name;
    }

    toString(): string {
        return `(name: ${this.getName()}, currentProject: ${this.getCurrentProject()})`;
    }
}

class Backend extends Employee {
    public toString = (): string => {
        return `Backend ${super.toString()})`;
    }
}

class Frontend extends Employee {
    public toString = (): string => {
        return `Frontend ${super.toString()}`;
    }
}

class Company {
    private readonly employees: Employee[];

    constructor() {
        this.employees = [];
    }

    add(employee: Employee) {
        this.employees.push(employee);
    }

    getProjectList(): string[] {
        return this.employees
            .map((item) => item.getCurrentProject())
            .filter((value, i, currentValue) => currentValue.indexOf(value) === i);
    }

    getNameList(): string[] {
        return this.employees.map(employee => employee.getName());
    }

    public toString = (): string => {
        return "BritishCompany";
    }
}

function appendChildToBody(tagName: string, innerText: string = '') {
    const companyElement = document.createElement(tagName);
    if (innerText) {
        companyElement.innerText = innerText;
    }
    document.body.appendChild(companyElement);
}

const img = document.createElement('img');
img.src = 'https://img.uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/europe-flag-icon.svg';
img.height = 100;
img.width = 100;
document.body.appendChild(img);

/* Create an object of class Company */
const company = new Company();

/* Create several objects Frontend and Backend employees with information about their names and projects */
const employee1 = new Frontend("employee1", "Project #1");
const employee2 = new Frontend("employee2", "Project #2");
const employee3 = new Backend("employee3", "Project #3");
const employee4 = new Backend("employee4", "Project #2");

/* And add them to the company */
company.add(employee1);
company.add(employee2);
company.add(employee3);
company.add(employee4);

/*  Display the result of the getProjectList and getNameList methods in the console. */
console.log(company.getProjectList());
console.log(company.getNameList());

appendChildToBody('h2', `${company}`);
appendChildToBody('h3', `Project list: ${company.getProjectList().join(', ')}`);
appendChildToBody('h3', `Name list: ${company.getNameList().join(', ')}`);
appendChildToBody('hr');
appendChildToBody('h2', 'Employees');
appendChildToBody('h3', `${employee1}`);
appendChildToBody('h3', `${employee2}`);
appendChildToBody('h3', `${employee3}`);
appendChildToBody('h3', `${employee4}`);
appendChildToBody('hr');
