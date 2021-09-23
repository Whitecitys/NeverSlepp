SELECT ag.AGENT_NAME, ag.WORKING_AREA, ag.PHONE_NO, com.COMPANY_NAME, sum(od.ORD_AMOUNT)+(sum(od.ORD_AMOUNT)*ag.COMMISSION) Sum_Amount, (sum(od.ORD_AMOUNT)+(sum(od.ORD_AMOUNT)*ag.COMMISSION)/count(*)) as Avg_Amount
FROM orders od
LEFT JOIN agents ag on ag.AGENT_CODE = od.AGENT_CODE
LEFT JOIN company com on ag.COMPANY_ID = com.COMPANY_ID
GROUP BY ag.AGENT_CODE,ag.AGENT_NAME, ag.WORKING_AREA, ag.PHONE_NO, com.COMPANY_NAME
HAVING Sum_Amount > Avg_Amount
ORDER BY Sum_Amount DESC