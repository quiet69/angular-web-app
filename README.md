```
CREATE TABLE [dbo].[userTable](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[USER_ID] [varchar](50) NOT NULL,
	[U_PASSWORD] [varchar](50) NOT NULL,
	[U_EMAILID] [varchar](50) NOT NULL,
	[U_ROLE] [varchar](50) NOT NULL,
	[STATUS] [varchar](50) NULL,
	[LAST_UPDATED_ON] [date] NULL,
	[LAST_UPDATED_BY] [varchar](50) NULL
) ON [PRIMARY]
```
edit database name in backend/.env

to run
```
cd backend && npm i & node index.js
```
in another terminal
```
cd webapp && npm i & ng serve
```
