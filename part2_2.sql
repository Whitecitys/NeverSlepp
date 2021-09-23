Exec('Select * From TableInformation
Where EmployeeCode = ''' + @EmployeeCode + '''')

= แก้ปัญหาที่ฝั่ง input ด้วย real escape string
เพื่อป้องกัน User กรอก 

SELECT *
FROM agents
WHERE agents.AGENT_CODE = '' or 1=1 -- '