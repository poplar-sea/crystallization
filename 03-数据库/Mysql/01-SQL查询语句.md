1. 
```sql
SELECT e.employee_id, e.employee_name, d.dept_name FROM EmployeeTB AS e, DeptTB AS d WHERE e.dept_id=d.dept_id;
-- SELECT e.employee_id, e.employee_name, d.dept_name: 这部分表示你想从查询中获得哪些字段。
-- FROM EmployeeTB AS e, DeptTB AS d: 这部分表示你想从哪些表中获取数据。
-- WHERE e.dept_id=d.dept_id: 最后，WHERE子句用于过滤结果。
```