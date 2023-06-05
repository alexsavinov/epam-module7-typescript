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
        return `Employee (name: ${this.getName()}, currentProject: ${this.getCurrentProject()})`;
    }
}

interface ILocation {
    addPerson(person: Employee): void;

    getPerson(index: number): Employee;

    getCount(): number;
}

class CompanyLocationArray implements ILocation {
    private readonly persons: Employee[];

    constructor() {
        this.persons = new Array();
    }

    addPerson(person: Employee): void {
        this.persons.push(person);
    }

    getCount(): number {
        return this.persons.length;
    }

    getPerson(index: number): Employee {
        return this.persons[index];
    }

    toString(): string {
        return "CompanyLocationArray";
    }
}

class CompanyLocationLocalStorage implements ILocation {
    constructor() {
        this.setPersons(new Array() as Employee[]);
    }

    addPerson(person: Employee): void {
        let persons = this.getPersons();
        persons.push(person);
        this.setPersons(persons)
    }

    getCount(): number {
        return this.getPersons().length;
    }

    getPerson(index: number): Employee {
        return this.getPersons()[index];
    }

    getPersons(): Employee[] {
        return JSON.parse(localStorage.getItem('persons'));
    }

    setPersons(persons: Employee[]): void {
        localStorage.setItem('persons', JSON.stringify(persons));
    }

    toString(): string {
        return "CompanyLocationLocalStorage";
    }
}

class Company {
    private readonly employees: Employee[];
    private readonly location: ILocation;

    constructor(location: ILocation) {
        this.employees = [];
        this.location = location;
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
        return `BritishCompany (location: ${this.location})`;
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
img.src = 'united-kingdom-flag-icon.svg';
img.height = 100;
img.width = 100;
document.body.appendChild(img);

const location1 = new CompanyLocationArray();
const location2 = new CompanyLocationLocalStorage();

/* Create several Companies with different locations.*/
const company1 = new Company(location1);
const company2 = new Company(location2);

/* Create several objects Frontend and Backend employees with information about their names and projects */
const employee1 = new Employee("employee1", "Project #1");
const employee2 = new Employee("employee2", "Project #2");
const employee3 = new Employee("employee3", "Project #3");
const employee4 = new Employee("employee4", "Project #2");

/* Add several employees to each company.*/
company1.add(employee1);
company1.add(employee2);
company1.add(employee3);

location1.addPerson(employee1)

location2.addPerson(employee2)
location2.addPerson(employee3)

company2.add(employee2);
company2.add(employee3);
company2.add(employee4);

/*  Display the result of the getProjectList and getNameList methods in the console. */
console.log(company1.getProjectList());
console.log(company1.getNameList());
console.log(company2.getProjectList());
console.log(company2.getNameList());

appendChildToBody('h2', `${company1}`);
appendChildToBody('h3', `Project list: ${company1.getProjectList().join(', ')}`);
appendChildToBody('h3', `Name list: ${company1.getNameList().join(', ')}`);
appendChildToBody('h3', `location1 getCount: ${location1.getCount()}`);
appendChildToBody('hr');

appendChildToBody('h2', `${company2}`);
appendChildToBody('h3', `Project list: ${company2.getProjectList().join(', ')}`);
appendChildToBody('h3', `Name list: ${company2.getNameList().join(', ')}`);
appendChildToBody('h3', `location2 getCount: ${location2.getCount()}`);
appendChildToBody('hr');

appendChildToBody('h2', 'Employees');
appendChildToBody('h3', `${employee1}`);
appendChildToBody('h3', `${employee2}`);
appendChildToBody('h3', `${employee3}`);
appendChildToBody('h3', `${employee4}`);
appendChildToBody('hr');
