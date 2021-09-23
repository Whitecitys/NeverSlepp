Query สองแบบนี้เหมือนหรือต่างกันยังไง
= ต่างกัน
Select CompanyCode, EmployeeCode
From TableImformation
Where CompanyCode + EmployeeCode = 'NVSL0184'
จะได้ 
Select CompanyCode, EmployeeCode
From TableImformation
Where 'NVSL0184' = 'NVSL0184' 
ซึ่งเท่ากับ Where true จะได้ข้อมูลทั้งหมด




Select CompanyCode, EmployeeCode
From TableImformation
Where CompanyCode= 'NVSL' And EmployeeCode = '0184'
จะแสดงตาราง ที่มีค่า CompanyCode= 'NVSL' และ EmployeeCode = '0184'