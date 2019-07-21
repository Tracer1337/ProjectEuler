@echo off
C:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe /out:problem%1\problem%1.exe problem%1\problem%1.cs && (
  echo Output:
  problem%1\problem%1.exe
)
