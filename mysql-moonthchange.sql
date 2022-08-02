-- SELECT * FROM maintable_2CHDK
SELECT Month,
  MonthToMonthChange
FROM (
    SELECT m_name as Month,
      (total_id - diff) as MonthToMonthChange
    FROM (
        SELECT total_id,
          m_name,
          LAG(total_id, 1) OVER(
            ORDER BY m_num ASC
          ) AS diff
        FROM (
            SELECT MONTHNAME(DateJoined) m_name,
              Month(DateJoined) m_num,
              COUNT(ID) total_id
            FROM maintable_2CHDK
            GROUP BY m_name,
              m_num
          ) AS first_subquery
      ) AS second_subquery
  ) AS final_query
WHERE MonthToMonthChange IS NOT NULL;