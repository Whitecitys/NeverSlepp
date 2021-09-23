class Office {
    constructor() {
        this.name = 'Neversleep';
        this.address = 'Khonkean';
    }
    set setName(name) {
        this.name = name;
    }
    set setAddress(address) {
        this.address = address;
    }
    get getName() {
        return this.name;
    }
    get getAddress() {
        return this.address;
    }
}

class Employee extends Office{
    constructor() {
        super();
        this.department = 'Developer';
        this.age = '23';
        this.phone = '032323552';
        this.job = 'System Analyst';
    }
    set setDepartment(department) {
        this.department = department;
    }
    set setAge(age) {
        this.age = age;
    }
    set setPhone(phone) {
        this.phone = phone;
    }
    get getDepartment() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }
    get getPhone() {
        return this.phone;
    }
    set setJob(job) {
        this.department = job;
    }
    get getJob() {
        return this.job;
    }
}

dev1 = new Employee();
dev1.setAddress="Chiang mai"
console.log(dev1.getAddress)

