export default function createEmployeesObject(departmentName, employees) {
  for (const idx of employees) {
    newArray.push(idx);
  }
  const list = {
    [departmentName]: `${employees}`,
  };
  return list;
}
