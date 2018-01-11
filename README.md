## เกี่ยวกับแพคเกจ
[![Latest Stable Version](https://poser.pugx.org/hiqstd/flarum-ext-thai/v/stable)](https://packagist.org/packages/hiqstd/flarum-ext-thai)
[![Latest Unstable Version](https://poser.pugx.org/hiqstd/flarum-ext-thai/v/unstable)](https://packagist.org/packages/hiqstd/flarum-ext-thai)
[![Total Downloads](https://poser.pugx.org/hiqstd/flarum-ext-thai/downloads)](https://packagist.org/packages/hiqstd/flarum-ext-thai)
[![License](https://poser.pugx.org/hiqstd/flarum-ext-thai/license)](https://packagist.org/packages/hiqstd/flarum-ext-thai)

> แพคเกจภาษาไทยสำหรับ [Flarum](http://flarum.org/) ( ถูกนำกลับมาทำใหม่จากของเดิม [baraear/flarum-ext-thai](https://github.com/baraear/flarum-ext-thai) ซึ่งเป็นแพคเกจตัวแรกที่ถูกปล่อยให้ดาวน์โหลดใน [Flarum Community](https://discuss.flarum.org/) )

**ความต้องการของระบบ**: Flarum ^0.1.0-beta-7

## วิธีการใช้งาน
[Flarum](http://flarum.org/) อาศัย [Composer](https://getcomposer.org/) เพื่อจัดการการ dependencies และ extensions แพคเกจภาษาไทยมีอยู่ใน [Packagist](https://packagist.org/packages/brarear/flarum-ext-thai) แล้วและสามารถจัดการได้ในลักษณะที่กำลังจะกล่าวถึง โดยคุณต้องตรวจสอบให้แน่ใจว่าได้ติดตั้ง Composer บนคอมพิวเตอร์ของคุณแล้วจากนั้นทำตามขั้นตอนต่อไปนี้

1. รันคำสั่งนี้ในโฟลเดอร์ที่คุณติดตั้ง Flarum

       composer require hiqstd/flarum-ext-thai
           
   เมื่อติดตั้งเสร็จแล้วโปรดอย่าลืมเคลียแคชไฟล์ของ Flarum
       
       php flarum cache:clear

2. เข้าสู่ระบบในฐานะผู้ดูแลระบบบน Flarum ของคุณจากนั้นคลิกที่ **Extensions** จากนั้นทำเครื่องหมายที่ **ภาษาไทย** เพื่อเปิดใช้งานส่วนขยาย

คำสั่งเดียวกัน (ในขั้นตอนที่ 1) สามารถใช้ในการปรับปรุงชุดภาษาของภาษาไทยได้โดยไม่ต้องมีการปรับปรุงใด ๆ โปรดทราบว่าเนื่องจากแพคเกจภาษาไทยจะถูกเพิ่มเป็นส่วนขยายของ Flarum แพคเกจจะได้รับการอัปเดตโดยอัตโนมัติเมื่อคุณอัปเดต Flarum ผ่าน Composer

### แพคเกจของส่วนขยายที่รองรับ
เมื่อคุณติดตั้งแพคเกจใดๆก็ตามที่อยู่ในรายการด้านล่าง ภาษาของแพคเกจนั้นๆจะได้รับการแปลเป็นภาษาไทยโดยอัตโนมัติหากแพคเกจดังกล่าวรองรับได้หลายภาษา
> การแปลส่วนขยายที่สนับสนุนจะรองรับในการอัพเดตครั้งถัดไป

### บันทึกย่อ
- จนถึงปัจจุบันมีการแปลเกือบ 100%
- บางคำในบางประโยคยังคงได้รับการแปลด้วยความหมายที่ไม่สมเหตุสมผล ดังนั้นคุณสามารถร่วมเสนอความคิดเห็นในการปรับปรุงแก้ไขได้
- คำบรรยายภาษาอังกฤษยังคงอยู่ในรูปแบบความคิดเห็นของ yaml ดังนั้นคุณสามารถช่วยฉันแก้ไขการแปลได้

### การอนุญาต
แพคเกจ `hiqstd/flarum-ext-thai` เป็นซอฟต์แวร์โอเพนซอร์สภายใต้การอนุญาต [MIT license](https://github.com/hiqstd/flarum-ext-thai/blob/master/LICENSE).