:: Dedicated to God the Father

:: All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

:: https://github.com/ChristopherTopalian

:: https://github.com/ChristopherAndrewTopalian

:: This .bat File Combines All .js files in all folders of our project folder, into one main.js file.

:: To activate this .bat file, we double click the .bat file, while it is located in our js folder.

:: Topalian_Combine_JS_Files.bat

@echo off
:: set the output file name
set "output=main.js"

:: clear existing output file
type nul > "%output%"

:: loop through all JavaScript files in subdirectories
for /r %%i in (*.js) do (
    :: append the content of each file to the output file
    type "%%i" >> "%output%"
)

echo "JavaScript files combined into %output% successfully."
