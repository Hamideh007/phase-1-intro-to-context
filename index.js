// Your code here
function createEmployeeRecord(array) {
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  function createEmployeeRecords(employeeData) {
    return employeeData.map(function(array) {
      return createEmployeeRecord(array);
    });
  }
  
  function calculateRectangleArea(width, height) {
    if (width <= 0 || height <= 0) {
      return null;
    }
    return width * height;
  }
  
  function addTimeInEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: date,
    });
    return employee;
  }
  
  function createTimeInEvent(employee, dateTime) {
    const [date, hour] = dateTime.split(' ');
  
    employee.timeInEvents.push({
      type: 'TimeIn',
      date,
      hour: parseInt(hour, 10),
    });
  
    return employee;
  }
  function createTimeOutEvent(employee, dateTime) {
    const [date, hour] = dateTime.split(' ');
  
    employee.timeOutEvents.push({
      type: 'TimeOut',
      date,
      hour: parseInt(hour, 10),
    });
  
    return employee;
  }
  function hoursWorkedOnDate(employeeRecord, date) {
    const timeIn = employeeRecord.timeInEvents.find(event => event.date === date)
    const timeOut = employeeRecord.timeOutEvents.find(event => event.date === date)
  
    if (timeIn && timeOut) {
      const hoursWorked = (timeOut.hour - timeIn.hour) / 100
      return hoursWorked
    } else {
      return 0
    }
  }
  function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date)
    const payRate = employeeRecord.payPerHour
  
    return hoursWorked * payRate
  }
  function allWagesFor(employee) {
    const datesWorked = employee.timeInEvents.map(event => event.date);
  
    const wages = datesWorked.reduce((totalWages, date) => {
      return totalWages + wagesEarnedOnDate(employee, date);
    }, 0);
  
    return wages;
  }
  
  function calculatePayroll(employees) {
    const totalWages = employees.reduce((total, employee) => {
      return total + allWagesFor(employee);
    }, 0);
  
    return totalWages;
  }
  
           