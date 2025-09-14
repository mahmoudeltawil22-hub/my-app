# 1) أنشئ مجلد المشروع
mkdir my-app && cd my-app
git init

# 2) ملف index.html بسيط يعيد التوجيه لرابط تطبيقك (جربه)
mkdir www
cat > www/index.html <<'HTML'
<!doctype html>
<html>
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
  <body>
    <script>
      // افتح رابط خدمة Google Apps Script المنشورة
      window.location.replace("https://script.google.com/macros/s/AKfycbyhWqe8rFs-viUaqY-qnJgW_d9YxqzxuyStyQ7HbpVbYI_jdqlugfmSw456GelzAFFd/exec");
    </script>
    <p>يتم تحميل التطبيق...</p>
  </body>
</html>
HTML

# 3) init npm + install capacitor
npm init -y
npm install @capacitor/core @capacitor/cli

# 4) initialize capacitor app
npx cap init my-app com.example.myapp --web-dir=www

# 5) add android platform (ينشئ مجلد android)
npx cap add android

# 6) اجعل gradlew قابل للتنفيذ و commit
git add .
git commit -m "capacitor app scaffold"
git branch -M main
git remote add origin <https://github.com/mahmoudeltawil22-hub/my-app>
git push -u origin main
