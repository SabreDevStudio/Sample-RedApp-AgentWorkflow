@echo off

for /f %%f in ('dir /b modules') do (
	echo Installing %%f
	call npm install modules\%%f
	echo %%f should be installed in your local 'node_modules' folder
)

goto :eof
