"use strict";
var cals = document.getElementsByClassName('calculations')[0];
/* stores all the calculation expressions */
document.getElementById('one').addEventListener('click', function ()
{
    cals.innerText += 1;
});
document.getElementById('two').addEventListener('click', function ()
{
    cals.innerText += 2;
});
document.getElementById('three').addEventListener('click', function ()
{
    cals.innerText += 3;
});
document.getElementById('four').addEventListener('click', function ()
{
    cals.innerText += 4;
});
document.getElementById('five').addEventListener('click', function ()
{
    cals.innerText += 5;
});
document.getElementById('six').addEventListener('click', function ()
{
    cals.innerText += 6;
});
document.getElementById('seven').addEventListener('click', function ()
{
    cals.innerText += 7;
});
document.getElementById('eight').addEventListener('click', function ()
{
    cals.innerText += 8;
});
document.getElementById('nine').addEventListener('click', function ()
{
    cals.innerText += 9;
});
document.getElementById('zero').addEventListener('click', function ()
{
    cals.innerText += 0;
});
/////////////////////////////////////////////////////////////////////
document.getElementById('point').addEventListener('click', function ()
{
    cals.innerText += ".";
});
document.getElementById('ac').addEventListener('click', function ()
{
    cals.innerText = "";
});
document.getElementById('c').addEventListener('click', function ()
{
    cals.innerText = cals.innerText.substring(0, cals.innerText.length - 1);
});
document.getElementById('modulo').addEventListener('click', function ()
{
    cals.innerText += "%";
});
document.getElementById('slash').addEventListener('click', function ()
{
    cals.innerText += "/";
});
document.getElementById('mul').addEventListener('click', function ()
{
    cals.innerText += "*";
});
document.getElementById('sub').addEventListener('click', function ()
{
    cals.innerText += "-";
});
document.getElementById('add').addEventListener('click', function ()
{
    cals.innerText += "+";
});
document.getElementById('equal').addEventListener('click', function ()
{
    cals.innerText = eval(cals.innerText);
});