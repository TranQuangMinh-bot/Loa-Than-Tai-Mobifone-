# deploy.ps1 - build va day len VPS trong 1 lenh
pnpm build
if ($LASTEXITCODE -ne 0) { Write-Host "Build loi, dung lai."; exit 1 }

tar -czf loa-out.tar.gz -C out .
scp loa-out.tar.gz deploy@221.121.4.196:~
ssh deploy@221.121.4.196 "rm -rf ~/mobifone/loa/* && tar -xzf ~/loa-out.tar.gz -C ~/mobifone/loa"

Write-Host "Xong! Mo: https://loa.221-121-4-196.sslip.io (nho Ctrl+F5)"