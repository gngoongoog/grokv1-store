# Gn Store

متجر إلكتروني متقدم مبني باستخدام React، يدعم PWA، جلب البيانات من Google Sheets، وإرسال الطلبات عبر WhatsApp.

## الميزات
- **PWA**: يمكن تثبيته على الشاشة الرئيسية.
- **Google Sheets**: جلب المنتجات من ورقة Google Sheets.
- **سلة تسوق**: إدارة المنتجات مع LocalStorage.
- **WhatsApp**: إرسال الطلبات إلى رقم WhatsApp.
- **تصميم عصري**: ألوان محايدة (أسود، أبيض، رمادي)، متجاوب مع همبرغر مينو.
- **أداء**: Lazy Loading وCaching.

## الإعداد
1. **تثبيت التبعيات**:
   ```bash
   npm install
   ```
2. **إعداد Google Sheets**:
   - أنشئ ورقة Google Sheets بأعمدة: id, title, price, description, image, category.
   - انشر الورقة كـ CSV وأضف المعرف في `src/services/api.js`.
3. **تشغيل التطبيق**:
   ```bash
   npm run dev
   ```

## النشر
- **GitHub**: ارفع المشروع إلى مستودع جديد.
- **Vercel**: استورد المستودع من GitHub وانشر.

## الأوامر
- تطوير: `npm run dev`
- بناء: `npm run build`
- معاينة: `npm run preview`