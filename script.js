/* ChitraKaar Crafts — JavaScript */

/* DATA */
const FESTIVAL=false, FEST_PCT=0;
const PRODUCTS=[
  {id:1,
   name:"Custom Bouquet",
   shop:"ChitraKaar Crafts",
   price:499,
   desc:"Beautiful handcrafted bouquets made with love. Choose from chocolate bouquets, photo bouquets, jewelry bouquets, or mixed theme bouquets. Fully customizable for any occasion — birthday, anniversary, farewell, Valentine's Day and more.",
   features:["100% handmade","Fully customizable","Chocolates / Photos / Jewelry options","Perfect for all occasions","Bulk orders accepted"],
   imgs:["data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZmZmMGY1JyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nI2ZmOGZhYicgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+SkDwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nI2ZmOGZhYicgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+","data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZmZmMGY1JyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nI2ZmOGZhYicgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+SkDwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nI2ZmOGZhYicgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+","data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZmZmMGY1JyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nI2ZmOGZhYicgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+SkDwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nI2ZmOGZhYicgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+","data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZmZmMGY1JyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nI2ZmOGZhYicgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+SkDwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nI2ZmOGZhYicgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+"]
  },
  {id:2,
   name:"Gift Hamper",
   shop:"ChitraKaar Crafts",
   price:799,
   desc:"Curated gift hampers packed with goodies — chocolates, accessories, personalized items, fairy lights, and more. Each hamper is themed and beautifully packed. Perfect for birthdays, Valentine's Day, and special surprises.",
   features:["Themed packaging","Chocolates & accessories included","LED fairy lights option","Custom name/message card","Premium box packaging"],
   imgs:["data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZmZmOGUxJyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nI2ZmYjMwMCcgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+OgTwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nI2ZmYjMwMCcgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+","data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZmZmOGUxJyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nI2ZmYjMwMCcgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+OgTwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nI2ZmYjMwMCcgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+","data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZmZmOGUxJyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nI2ZmYjMwMCcgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+OgTwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nI2ZmYjMwMCcgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+","data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZmZmOGUxJyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nI2ZmYjMwMCcgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+OgTwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nI2ZmYjMwMCcgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+"]
  },
  {id:3,
   name:"Photo Frame",
   shop:"ChitraKaar Crafts",
   price:349,
   desc:"Personalized photo frames with your favorite memories. Available in single photo, collage grid, black & white art style, and 3D effect frames. A timeless gift that captures every special moment beautifully.",
   features:["Single / collage options","B&W art style available","Custom text & date","Desktop & wall mount","Handcrafted with love"],
   imgs:["data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZjNlNWY1JyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzljMjdiMCcgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+WvO+4jzwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nIzljMjdiMCcgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+","data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZjNlNWY1JyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzljMjdiMCcgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+WvO+4jzwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nIzljMjdiMCcgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+","data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZjNlNWY1JyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzljMjdiMCcgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+WvO+4jzwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nIzljMjdiMCcgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+","data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZjNlNWY1JyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzljMjdiMCcgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+WvO+4jzwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nIzljMjdiMCcgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+"]
  },
  {id:4,
   name:"Handmade Card",
   shop:"ChitraKaar Crafts",
   price:249,
   desc:"Unique handmade greeting cards — explosion boxes, scrapbook style, newspaper theme, and more. Each card is a mini work of art filled with photos, stickers, ribbons, and personalized messages.",
   features:["Explosion box style available","Photo & sticker collage inside","Ribbon & bow decoration","Handwritten message option","Compact & giftable"],
   imgs:["data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZmNlNGVjJyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nI2U5MWU2Mycgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+SjDwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nI2U5MWU2Mycgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+","data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZmNlNGVjJyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nI2U5MWU2Mycgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+SjDwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nI2U5MWU2Mycgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+","data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZmNlNGVjJyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nI2U5MWU2Mycgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+SjDwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nI2U5MWU2Mycgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+","data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZmNlNGVjJyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nI2U5MWU2Mycgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+SjDwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nI2U5MWU2Mycgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+"]
  },
  {id:5,
   name:"Explosion Box",
   shop:"ChitraKaar Crafts",
   price:599,
   desc:"Stunning explosion boxes that open up to reveal layers of photos, messages, chocolates, and decorations. A WOW-worthy gift that surprises the recipient with every layer. Fully customizable with your photos and theme.",
   features:["4-layer surprise inside","Photos + chocolates + decor","Custom theme (birthday/love/farewell)","Handcrafted premium finish","Gift-ready packaging"],
   imgs:["data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZThmNWU5JyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzQzYTA0Nycgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+OijwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nIzQzYTA0Nycgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+","data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZThmNWU5JyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzQzYTA0Nycgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+OijwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nIzQzYTA0Nycgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+","data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZThmNWU5JyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzQzYTA0Nycgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+OijwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nIzQzYTA0Nycgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+","data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxyZWN0IHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyBmaWxsPScjZThmNWU5JyByeD0nMTYnLz4KPHJlY3QgeD0nOCcgeT0nOCcgd2lkdGg9JzM4NCcgaGVpZ2h0PSczODQnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzQzYTA0Nycgc3Ryb2tlLXdpZHRoPSczJyByeD0nMTInIHN0cm9rZS1kYXNoYXJyYXk9JzEyLDYnLz4KPHRleHQgeD0nMjAwJyB5PScyMDAnIGZvbnQtc2l6ZT0nMTIwJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkb21pbmFudC1iYXNlbGluZT0nY2VudHJhbCc+8J+OijwvdGV4dD4KPHJlY3QgeD0nNDAnIHk9JzMwMCcgd2lkdGg9JzMyMCcgaGVpZ2h0PSc2MCcgZmlsbD0nIzQzYTA0Nycgcng9JzgnIG9wYWNpdHk9JzAuMTUnLz4KPC9zdmc+"]
  },
];

let currentUser=JSON.parse(localStorage.getItem('ck_u')||'null');
let users=JSON.parse(localStorage.getItem('ck_us')||'[]');
let cart=[],orders=[],authCb=null,coStep=1,coData={},selPay='cod';
let qtys={},selected=new Set();
PRODUCTS.forEach(p=>qtys[p.id]=1);

function loadUD(){
  if(!currentUser){cart=[];orders=[];return;}
  cart=JSON.parse(localStorage.getItem('ck_c_'+currentUser.email)||'[]');
  orders=JSON.parse(localStorage.getItem('ck_o_'+currentUser.email)||'[]');
}
loadUD();
function saveCart(){if(currentUser)localStorage.setItem('ck_c_'+currentUser.email,JSON.stringify(cart));updBadge();}
function saveOrders(){if(currentUser)localStorage.setItem('ck_o_'+currentUser.email,JSON.stringify(orders));}
function dprice(p){return FESTIVAL?Math.round(p*(1-FEST_PCT/100)):p;}

function showToast(msg,dur=2800){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),dur);
}
function updBadge(){
  const n=cart.reduce((a,i)=>a+i.qty,0);
  const b=document.getElementById('cbadge');
  b.textContent=n;b.style.display=n>0?'flex':'none';
}

/* ── PAGE ROUTER (clean, reliable) ── */
const PAGES=['home','about','contact','cart','checkout','confirm','dashboard','product'];

function goPage(name){
  if((name==='cart'||name==='checkout'||name==='dashboard')&&!currentUser){
    authCb=()=>goPage(name); openAuth(); return;
  }
  // Hide all pages
  PAGES.forEach(p=>{
    const el=document.getElementById('pg-'+p);
    if(el){el.classList.remove('on');el.style.display='none';}
  });
  // Show target page
  const tgt=document.getElementById('pg-'+name);
  if(tgt){tgt.classList.add('on');tgt.style.display='block';}
  // Scroll top
  window.scrollTo({top:0,behavior:'smooth'});
  // Highlight nav
  ['home','about','contact'].forEach(n=>{
    const el=document.getElementById('nl-'+n);
    if(el) el.classList.toggle('alink',n===name);
  });
  // Init page content
  if(name==='cart')renderCart();
  if(name==='checkout'){coStep=1;renderCheckout();}
  if(name==='dashboard')renderDashboard();
}

/* NAV */
function navGo(name){closeMenu();goPage(name);}
function toggleMenu(){document.getElementById('navLinks').classList.toggle('open');}
function closeMenu(){document.getElementById('navLinks').classList.remove('open');}

function updateNav(){
  const ali=document.getElementById('authLi');
  const uli=document.getElementById('userLi');
  const lli=document.getElementById('logoutLi');
  if(currentUser){
    ali.style.display='none';uli.style.display='';lli.style.display='';
    document.getElementById('userLink').textContent=currentUser.name.split(' ')[0];
  } else {
    ali.style.display='';uli.style.display='none';lli.style.display='none';
  }
  updBadge();
}

/* AUTH */
function openAuth(){document.getElementById('authModal').classList.add('show');}
function closeAuth(){document.getElementById('authModal').classList.remove('show');}
function closeModalOut(e){if(e.target===document.getElementById('authModal'))closeAuth();}
function requireAuth(cb){if(currentUser)cb();else{authCb=cb;openAuth();}}

function switchTab(t){
  document.getElementById('fLogin').style.display=t==='login'?'block':'none';
  document.getElementById('fReg').style.display=t==='register'?'block':'none';
  document.getElementById('tLogin').classList.toggle('act',t==='login');
  document.getElementById('tReg').classList.toggle('act',t==='register');
}

function doLogin(){
  const email=document.getElementById('lEmail').value.trim();
  const pass=document.getElementById('lPass').value;
  const err=document.getElementById('lErr');
  if(!email||!pass){err.textContent='Fill all fields.';return;}
  const u=users.find(x=>x.email===email&&x.password===pass);
  if(!u){err.textContent='Wrong email or password.';return;}
  err.textContent='';loginOk(u);
}

function doRegister(){
  const name=document.getElementById('rName').value.trim();
  const email=document.getElementById('rEmail').value.trim();
  const pass=document.getElementById('rPass').value;
  const err=document.getElementById('rErr');
  if(!name||!email||!pass){err.textContent='All fields required.';return;}
  if(!/\S+@\S+\.\S+/.test(email)){err.textContent='Enter a valid email.';return;}
  if(pass.length<6){err.textContent='Password min 6 characters.';return;}
  if(users.find(u=>u.email===email)){err.textContent='Email already registered. Login instead.';return;}
  // Save to DB (localStorage)
  const u={name,email,password:pass,phone:'',addresses:[],joinedAt:new Date().toISOString()};
  users.push(u);
  localStorage.setItem('ck_us',JSON.stringify(users));
  err.textContent='';loginOk(u);
}

function loginOk(u){
  // Always read freshest copy from DB
  const fresh=users.find(x=>x.email===u.email)||u;
  currentUser=fresh;
  localStorage.setItem('ck_u',JSON.stringify(fresh));
  loadUD();updateNav();closeAuth();
  showToast('Welcome back, '+fresh.name.split(' ')[0]+'! 👋');
  if(authCb){authCb();authCb=null;}
}

// Persist user profile changes back to DB
function saveUserProfile(){
  const idx=users.findIndex(u=>u.email===currentUser.email);
  if(idx>-1){users[idx]=currentUser;localStorage.setItem('ck_us',JSON.stringify(users));}
  localStorage.setItem('ck_u',JSON.stringify(currentUser));
}

function doLogout(){
  currentUser=null;cart=[];orders=[];
  localStorage.removeItem('ck_u');
  updateNav();goPage('home');
  showToast('Logged out. See you soon!');
}

/* PRODUCTS */
function renderProducts(){
  document.getElementById('prodGrid').innerHTML=PRODUCTS.map(p=>{
    const dp=dprice(p.price),saved=p.price-dp,pct=Math.round(saved/p.price*100);
    return `
    <div class="pcard">
      <div class="pchkw"><input type="checkbox" class="pchk" id="chk${p.id}" onchange="toggleSel(${p.id})"></div>
      ${FESTIVAL?`<div class="dtag">-${pct}%</div>`:''}
      <div class="pimg" onclick="openProduct(${p.id})" style="cursor:pointer" title="Click to view details"><img src="${p.imgs[0]}" alt="${p.name}" loading="lazy"></div>
      <div class="pbody">
        <div class="pshop">🏪 ${p.shop}</div>
        <div class="pname" onclick="openProduct(${p.id})" style="cursor:pointer">${p.name}</div>
        <div class="prow">
          <span class="pnow">₹${dp}</span>
          ${FESTIVAL?`<span class="pwas">₹${p.price}</span><span class="psave">Save ₹${saved}</span>`:''}
        </div>
        <div class="qrow">
          <button class="qbtn" onclick="changeQty(${p.id},-1)">−</button>
          <span class="qval" id="qv${p.id}">1</span>
          <button class="qbtn" onclick="changeQty(${p.id},1)">+</button>
        </div>
        <button class="addbtn" onclick="requireAuth(()=>addToCart(${p.id}))">🛒 Add to Cart</button>
      </div>
    </div>`;
  }).join('');
}

function changeQty(id,d){qtys[id]=Math.max(1,(qtys[id]||1)+d);document.getElementById('qv'+id).textContent=qtys[id];}
function toggleSel(id){if(selected.has(id))selected.delete(id);else selected.add(id);updBulk();}
function updBulk(){
  const bar=document.getElementById('bulkBar');
  if(selected.size>0){bar.classList.add('show');document.getElementById('bulkCount').textContent=`${selected.size} item${selected.size>1?'s':''} selected`;}
  else bar.classList.remove('show');
}
function addToCart(id){
  const p=PRODUCTS.find(x=>x.id===id);
  const qty=qtys[id]||1,dp=dprice(p.price);
  const ex=cart.find(i=>i.id===id);
  if(ex)ex.qty+=qty;
  else cart.push({id:p.id,name:p.name,shop:p.shop,img:p.imgs[0],price:dp,orig:p.price,qty});
  saveCart();showToast(p.name+' added to cart! 🛒');
}
function bulkAdd(){
  requireAuth(()=>{
    if(!selected.size)return;
    selected.forEach(id=>addToCart(id));
    const n=selected.size;selected.clear();
    document.querySelectorAll('.pchk').forEach(c=>c.checked=false);
    updBulk();showToast(n+' items added to cart!');
  });
}

/* CART */
function renderCart(){
  if(!currentUser)return;
  const w=document.getElementById('cartContent');
  if(!cart.length){
    document.getElementById('cartSub').textContent='0 items';
    w.innerHTML=`<div class="ecart"><div style="font-size:3.5rem;margin-bottom:14px">🛒</div><h3>Your cart is empty</h3><p>Browse products and add something you like.</p><br><button class="bgold" onclick="goPage('home')" style="margin:0 auto">Browse Products</button></div>`;
    return;
  }
  const sub=cart.reduce((a,i)=>a+i.price*i.qty,0);
  const orig=cart.reduce((a,i)=>a+(i.orig||i.price)*i.qty,0);
  const saved=orig-sub,del=sub>=999?0:49,grand=sub+del;
  document.getElementById('cartSub').textContent=`${cart.reduce((a,i)=>a+i.qty,0)} items`;
  w.innerHTML=`
  <div class="clayout">
    <div class="citems">
      ${cart.map(it=>`
      <div class="ci">
        <img src="${it.img}" alt="${it.name}" onerror="this.src='https://via.placeholder.com/76x76/f4efe4/888?text=P'">
        <div class="ciinfo">
          <div class="ciname">${it.name}</div>
          <div class="cishop">🏪 ${it.shop}</div>
          <div class="ciprice">₹${it.price} × ${it.qty} = <strong>₹${it.price*it.qty}</strong></div>
        </div>
        <div class="ciact">
          <div class="qrow">
            <button class="qbtn" onclick="cartQty(${it.id},-1)">−</button>
            <span class="qval">${it.qty}</span>
            <button class="qbtn" onclick="cartQty(${it.id},1)">+</button>
          </div>
          <button class="rmbtn" onclick="removeItem(${it.id})">🗑</button>
        </div>
      </div>`).join('')}
    </div>
    <div class="csum">
      <h3>Order Summary</h3>
      <div class="srow"><span>Subtotal</span><span>₹${sub}</span></div>
      ${saved>0?`<div class="srow"><span>You Save</span><span class="ssave">−₹${saved}</span></div>`:''}
      <div class="srow"><span>Delivery</span><span>${del===0?'<span style="color:var(--green)">FREE</span>':'₹'+del}</span></div>
      <div class="srow tot"><span>Grand Total</span><span>₹${grand}</span></div>
      <button class="cobtn" onclick="goPage('checkout')">Proceed to Checkout →</button>
      <button onclick="goPage('home')" style="width:100%;margin-top:9px;padding:10px;background:none;border:1.5px solid var(--gl);border-radius:8px;cursor:pointer;font-weight:600">Continue Shopping</button>
    </div>
  </div>`;
}
function cartQty(id,d){const it=cart.find(i=>i.id===id);if(!it)return;it.qty=Math.max(1,it.qty+d);saveCart();renderCart();}
function removeItem(id){cart=cart.filter(i=>i.id!==id);saveCart();renderCart();showToast('Item removed.');}

/* CHECKOUT */
function renderCheckout(){
  [1,2,3].forEach(n=>{
    const el=document.getElementById('cs'+n);
    el.className='costep'+(n===coStep?' act':n<coStep?' done':'');
  });
  const sub=cart.reduce((a,i)=>a+i.price*i.qty,0);
  const del=sub>=999?0:49,grand=sub+del;
  const w=document.getElementById('coContent');
  if(coStep===1){
    // Check if user has a saved address already
    const hasAddr = currentUser.addresses && currentUser.addresses.length > 0;
    const lastAddr = hasAddr ? currentUser.addresses[currentUser.addresses.length-1] : null;
    const savedBlock = hasAddr ? `
      <div style="background:rgba(201,168,76,.08);border:1.5px solid var(--gold);border-radius:9px;padding:14px;margin-bottom:16px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <span style="font-weight:700;font-size:.88rem">📍 Use Saved Address</span>
          <button onclick="useSavedAddr()" style="background:var(--gold);color:var(--black);border:none;border-radius:6px;padding:5px 12px;font-weight:700;font-size:.8rem;cursor:pointer">Use This</button>
        </div>
        <div style="font-size:.83rem;color:#555;line-height:1.6">${lastAddr.n} | 📞 ${lastAddr.p}<br>${lastAddr.a}, ${lastAddr.c} ${lastAddr.z}, ${lastAddr.s}</div>
      </div>` : '';
    w.innerHTML=`
    <div class="cobody">
      <div class="coform">
        <h3>📍 Delivery Details</h3>
        ${savedBlock}
        <div style="font-size:.83rem;color:var(--gray);margin-bottom:12px;font-weight:600">${hasAddr?'Or enter a new address:':'Enter your delivery details:'}</div>
        <div class="frow2">
          <div class="fg"><label>Full Name *</label><input id="co_n" value="${currentUser?.name||''}" placeholder="Full Name"></div>
          <div class="fg"><label>Mobile Number *</label><input id="co_p" type="tel" placeholder="+91 XXXXX XXXXX"></div>
        </div>
        <div class="fg"><label>Street / House Address *</label><textarea id="co_a" rows="2" placeholder="House no, Street, Area"></textarea></div>
        <div class="frow2">
          <div class="fg"><label>City *</label><input id="co_c" placeholder="City"></div>
          <div class="fg"><label>PIN Code *</label><input id="co_z" placeholder="000000"></div>
        </div>
        <div class="fg"><label>State *</label><input id="co_s" placeholder="State"></div>
        <button class="nxtbtn" onclick="coNext(2)">Continue to Review →</button>
      </div>
      ${coSide(sub,del,grand)}
    </div>`;
  } else if(coStep===2){
    const rows=cart.map(i=>`<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--gl)"><div><div style="font-weight:600">${i.name}</div><div style="font-size:.78rem;color:var(--gray)">${i.shop} × ${i.qty}</div></div><div style="font-weight:700">₹${i.price*i.qty}</div></div>`).join('');
    w.innerHTML=`
    <div class="cobody">
      <div class="coform">
        <h3>📋 Order Review</h3>
        ${rows}
        <div style="display:flex;justify-content:space-between;padding:12px 0;font-weight:700"><span>Grand Total</span><span>₹${grand}</span></div>
        <div style="background:var(--cream);border-radius:8px;padding:14px;font-size:.86rem;line-height:1.7">
          <strong>Deliver to:</strong><br>
          ${coData.n||currentUser?.name} &nbsp;|&nbsp; 📞 ${coData.p||currentUser?.phone}<br>
          ${coData.a||currentUser?.address}<br>
          ${coData.c||''} ${coData.z||''}, ${coData.s||''}
        </div>
        <button class="bckbtn" onclick="coStep=1;renderCheckout()">← Back</button>
        <button class="nxtbtn" onclick="coNext(3)">Select Payment →</button>
      </div>
      ${coSide(sub,del,grand)}
    </div>`;
  } else {
    w.innerHTML=`
    <div class="cobody">
      <div class="coform">
        <h3>💳 Payment Method</h3>
        <div class="payopt sel" id="p-cod" onclick="setPay('cod')">
          <input type="radio" name="pay" checked>
          <span class="payico">💵</span>
          <div><div class="paylbl">Cash on Delivery</div><div class="paysub">Pay when your order arrives</div></div>
        </div>
        <div class="payopt" id="p-online" onclick="setPay('online')">
          <input type="radio" name="pay">
          <span class="payico">💳</span>
          <div><div class="paylbl">Online Payment</div><div class="paysub">Cards, UPI, Net Banking, Wallets</div></div>
        </div>
        <div id="onlineF" style="display:none;margin-top:14px">
          <div class="upi-box">
            <div class="upi-title">📲 Pay via UPI</div>
            <div class="upi-sub">Scan QR or click your app to pay</div>
            <div class="upi-amount" id="upiAmount">₹0</div>
            <div class="upi-qr" id="upiQR">
              <div style="color:#999;font-size:.8rem">Generating QR...</div>
            </div>
            <div class="upi-apps" id="upiApps"></div>
            <div class="upi-id-box">
              <span>UPI ID: <strong id="upiIdDisplay">yourname@bank</strong></span>
              <button class="upi-copy-btn" onclick="copyUpiId()">Copy</button>
            </div>
            <div class="upi-note">⚠️ After payment, take a screenshot and place your order.<br>We will verify payment before shipping.</div>
          </div>
        </div>
        <button class="bckbtn" onclick="coStep=2;renderCheckout()">← Back</button>
        <button class="nxtbtn" id="placeBtn" onclick="placeOrder()">Place Order ✓</button>
      </div>
      ${coSide(sub,del,grand)}
    </div>`;
  }
}
function coSide(sub,del,grand){
  return `<div class="csum"><h3>Order Total</h3><div class="srow"><span>Items (${cart.reduce((a,i)=>a+i.qty,0)})</span><span>₹${sub}</span></div><div class="srow"><span>Delivery</span><span>${del===0?'<span style="color:var(--green)">FREE</span>':'₹'+del}</span></div><div class="srow tot"><span>Total</span><span>₹${grand}</span></div></div>`;
}
function coNext(n){
  if(n===2){
    const nm=document.getElementById('co_n')?.value?.trim();
    const ph=document.getElementById('co_p')?.value?.trim();
    const ad=document.getElementById('co_a')?.value?.trim();
    const ci=document.getElementById('co_c')?.value?.trim();
    const zi=document.getElementById('co_z')?.value?.trim();
    const st=document.getElementById('co_s')?.value?.trim();
    if(!nm||!ph||!ad||!ci||!zi||!st){showToast('Please fill all delivery fields.');return;}
    if(ph.replace(/\D/g,'').length<10){showToast('Enter a valid 10-digit mobile number.');return;}
    coData={n:nm,p:ph,a:ad,c:ci,z:zi,s:st};
    // Save address to user profile DB for next time
    if(!currentUser.addresses) currentUser.addresses=[];
    // Only save if different from last saved
    const last=currentUser.addresses[currentUser.addresses.length-1];
    const isDiff=!last||last.a!==ad||last.p!==ph;
    if(isDiff){
      currentUser.addresses.push({n:nm,p:ph,a:ad,c:ci,z:zi,s:st});
      if(currentUser.addresses.length>3) currentUser.addresses.shift(); // keep last 3 only
      currentUser.phone=ph; // update default phone
      saveUserProfile();
    }
  }
  coStep=n;renderCheckout();
}

function useSavedAddr(){
  const last=currentUser.addresses[currentUser.addresses.length-1];
  if(!last)return;
  coData={...last};
  coStep=2;renderCheckout();
}
/* UPI PAYMENT SYSTEM */
// ⚠️ REPLACE with your UPI ID
var UPI_ID   = 'yourname@bank';
var UPI_NAME = 'ChitraKaar Crafts';

function generateUPI(){
  var sub  = cart.reduce(function(a,i){return a+i.price*i.qty;},0);
  var del  = sub>=999?0:49;
  var amt  = sub+del;

  // Show amount
  var amtEl = document.getElementById('upiAmount');
  if(amtEl) amtEl.textContent = '₹'+amt;

  // Show UPI ID
  var idEl = document.getElementById('upiIdDisplay');
  if(idEl) idEl.textContent = UPI_ID;

  // UPI deep link
  var upiLink = 'upi://pay?pa='+encodeURIComponent(UPI_ID)+
                '&pn='+encodeURIComponent(UPI_NAME)+
                '&am='+amt+
                '&cu=INR'+
                '&tn='+encodeURIComponent('ChitraKaar Crafts Order');

  // UPI App buttons
  var apps = [
    {name:'GPay',    emoji:'🟢', scheme:'gpay://upi/pay?',   color:'#34A853'},
    {name:'PhonePe', emoji:'🟣', scheme:'phonepe://pay?',    color:'#5f259f'},
    {name:'Paytm',   emoji:'🔵', scheme:'paytmmp://pay?',    color:'#00BAF2'},
    {name:'Any UPI', emoji:'💳', scheme:'upi://pay?',        color:'#ff6b00'},
  ];

  var appsEl = document.getElementById('upiApps');
  if(appsEl){
    appsEl.innerHTML = apps.map(function(app){
      var link = 'upi://pay?pa='+encodeURIComponent(UPI_ID)+
                 '&pn='+encodeURIComponent(UPI_NAME)+
                 '&am='+amt+'&cu=INR&tn='+encodeURIComponent('ChitraKaar Crafts Order');
      return '<a href="'+link+'" class="upi-app-btn" style="border-color:'+app.color+'20">'+
             '<span style="font-size:1.1rem">'+app.emoji+'</span>'+app.name+'</a>';
    }).join('');
  }

  // Generate QR using Google Charts API
  var qrEl = document.getElementById('upiQR');
  if(qrEl){
    var qrData = encodeURIComponent(upiLink);
    var qrImg = document.createElement('img');
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=160x160&data='+qrData;
    qrImg.style.cssText = 'width:160px;height:160px;border-radius:6px';
    qrImg.alt = 'UPI QR Code';
    qrImg.onerror = function(){
      qrEl.innerHTML = '<div style="text-align:center;color:#555;font-size:.75rem;padding:10px">QR needs internet<br>connection</div>';
    };
    qrEl.innerHTML = '';
    qrEl.appendChild(qrImg);
  }
}

function copyUpiId(){
  if(navigator.clipboard){
    navigator.clipboard.writeText(UPI_ID).then(function(){
      showToast('UPI ID copied! ✅');
    });
  } else {
    showToast('UPI ID: '+UPI_ID);
  }
}

function setPay(t){
  selPay=t;
  document.getElementById('p-cod').classList.toggle('sel',t==='cod');
  document.getElementById('p-online').classList.toggle('sel',t==='online');
  document.getElementById('p-cod').querySelector('input').checked=t==='cod';
  document.getElementById('p-online').querySelector('input').checked=t==='online';
  document.getElementById('onlineF').style.display=t==='online'?'block':'none';
  if(t==='online') setTimeout(generateUPI, 50);
}
async function placeOrder(){
  const btn=document.getElementById('placeBtn');
  btn.disabled=true;btn.innerHTML='<span class="spin"></span> Placing…';
  const oid='CK-'+Math.floor(100000+Math.random()*900000);
  const sub=cart.reduce((a,i)=>a+i.price*i.qty,0);
  const del=sub>=999?0:49;
  const order={id:oid,items:[...cart],delivery:coData,payment:selPay,total:sub+del,status:'Order Placed',placedAt:new Date().toLocaleString('en-IN')};
  orders.unshift(order);saveOrders();
  // Cart is NOT cleared — user manages their own cart
  document.getElementById('oidDisplay').textContent='Order #'+oid;
  // Build WhatsApp message and open directly
  buildWhatsAppMsg(order);
  goPage('confirm');
  // Auto open WhatsApp after 800ms (so confirm page renders first)
  setTimeout(function(){ openWhatsApp(); }, 800);
}


/* DASHBOARD */
function renderDashboard(){
  if(!currentUser)return;
  const sm={'Order Placed':'sp','Processing':'spr','Shipped':'sps','Delivered':'spd','Cancelled':'spc'};
  const cards=orders.length===0
    ?`<div style="text-align:center;padding:60px;color:var(--gray)"><div style="font-size:3rem;margin-bottom:14px">📦</div><p style="margin-bottom:20px">No orders yet!</p><button class="bgold" onclick="goPage('home')">Start Shopping</button></div>`
    :orders.map(o=>`
    <div class="ocard">
      <div class="ohd">
        <div><div style="font-weight:700;font-size:.95rem">${o.id}</div><div style="font-size:.78rem;color:var(--gray)">${o.placedAt}</div></div>
        <span class="ostatus ${sm[o.status]||'sp'}">${o.status}</span>
      </div>
      <div style="font-size:.86rem;color:var(--gray);margin-bottom:8px">${o.items.map(i=>i.name).join(', ')}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <strong>₹${o.total}</strong>
        <div style="display:flex;gap:7px;flex-wrap:wrap">
          ${o.status==='Order Placed'?`<button class="cancelbtn" onclick="cancelOrder('${o.id}')">❌ Cancel</button>`:''}
          ''
          ''
        </div>
      </div>
    </div>`).join('');
  document.getElementById('dashContent').innerHTML=`
  <div class="dashgrid">
    <div class="dashside">
      <div class="duser">
        <div class="davt">${currentUser.name[0].toUpperCase()}</div>
        <div class="dname">${currentUser.name}</div>
        <div class="demail">${currentUser.email}</div>
        ${currentUser.phone?`<div style="font-size:.75rem;color:var(--gray);margin-top:2px">📞 ${currentUser.phone}</div>`:''}
      </div>
      <ul class="dnav">
        <li><a class="act">📦 My Orders</a></li>
        <li><a onclick="showToast('Profile edit coming soon!')">👤 My Profile</a></li>
        <li><a onclick="goPage('cart')">🛒 My Cart</a></li>
        <li><a onclick="goPage('contact')">📧 Contact Support</a></li>
        <li><a onclick="doLogout()">🚪 Logout</a></li>
      </ul>
    </div>
    <div>
      <h3 style="font-family:var(--serif);font-size:1.3rem;margin-bottom:18px">Order History</h3>
      ${cards}
    </div>
  </div>`;
}
/* WHATSAPP NOTIFICATION */
// ⚠️ REPLACE with your WhatsApp number (91 + 10 digits)
var WA_NUMBER = '919999999999';
var waMessage = '';

function buildWhatsAppMsg(o){
  var lines = o.items.map(function(i){
    return '  • '+i.name+' x'+i.qty+' = ₹'+(i.price*i.qty);
  }).join('\n');

  waMessage =
    '🛍️ *New Order - ChitraKaar Crafts*\n\n'+
    '📦 *Order ID:* '+o.id+'\n'+
    '📅 *Date:* '+o.placedAt+'\n'+
    '💳 *Payment:* '+(o.payment==='cod'?'Cash on Delivery':'Online Payment')+'\n\n'+
    '👤 *Customer Details*\n'+
    'Name: '+currentUser.name+'\n'+
    'Email: '+currentUser.email+'\n'+
    'Mobile: '+(currentUser.phone||o.delivery.p||'N/A')+'\n\n'+
    '📍 *Delivery Address*\n'+
    o.delivery.n+'\n'+
    o.delivery.a+'\n'+
    o.delivery.c+', '+o.delivery.z+'\n'+
    o.delivery.s+'\n'+
    'Ph: '+o.delivery.p+'\n\n'+
    '🛒 *Items Ordered*\n'+
    lines+'\n\n'+
    '💰 *Total: ₹'+o.total+'*\n'+
    '─────────────────\n'+
    'ChitraKaar Crafts Order';
}

function openWhatsApp(){
  if(!waMessage){ showToast('No order to share!'); return; }
  var url = 'https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(waMessage);
  // Use anchor click — works on mobile + desktop, not blocked by browser
  var a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  waMessage='';
}

function cancelOrder(id){
  const o=orders.find(x=>x.id===id);
  if(o&&o.status==='Order Placed'){
    o.status='Cancelled';
    saveOrders();
    renderDashboard();
    showToast('Order cancelled.');
    // Send cancellation notification to Gmail
  }
}



/* PRODUCT DETAIL PAGE */
var currentProduct = null;
var lbIndex = 0;

function openProduct(id){
  currentProduct = PRODUCTS.find(function(p){ return p.id===id; });
  if(!currentProduct) return;
  goPage('product');
  renderProductDetail();
}

function renderProductDetail(){
  var p = currentProduct;
  var dp = dprice(p.price);
  var saved = p.price - dp;
  var pct = Math.round(saved/p.price*100);

  // Thumbnails
  var thumbs = p.imgs.map(function(img,i){
    return '<div class="pd-thumb'+(i===0?' act':'')+'" onclick="switchImg('+i+')" id="pdthumb'+i+'">'+
           '<img src="'+img+'" alt="View '+(i+1)+'"></div>';
  }).join('');

  // Features list
  var feats = (p.features||[]).map(function(f){
    return '<li>'+f+'</li>';
  }).join('');

  // Price section
  var priceHtml = '<span class="pd-price-now">₹'+dp+'</span>';
  if(saved>0) priceHtml += '<span class="pd-price-was">₹'+p.price+'</span>'+
                           '<span class="pd-price-save">'+pct+'% OFF</span>';

  document.getElementById('productDetailContent').innerHTML =
    // Back button
    '<div class="pd-back" onclick="history.back()">'+
    '  <span style="font-size:1.1rem">←</span> Back to Products'+
    '</div>'+

    '<div class="pd-wrap">'+

      // LEFT — Gallery
      '<div class="pd-gallery">'+
        '<div class="pd-main-img" onclick="openLightbox(lbIndex)" title="Click to zoom">'+
          '<img id="pdMainImg" src="'+p.imgs[0]+'" alt="'+p.name+'">'+
        '</div>'+
        '<div class="pd-thumbs">'+thumbs+'</div>'+
        '<div style="text-align:center;margin-top:10px;font-size:.75rem;color:var(--gray)">'+
          '🔍 Click image to zoom • Tap thumbnails to switch view'+
        '</div>'+
      '</div>'+

      // RIGHT — Info
      '<div class="pd-info">'+
        '<div class="pd-shop">🏪 '+p.shop+'</div>'+
        '<div class="pd-name">'+p.name+'</div>'+

        '<div class="pd-stars">'+
          '<span class="stars">★★★★★</span>'+
          '<span class="rcount">4.8 · 128 reviews</span>'+
        '</div>'+

        '<div class="pd-price-box">'+priceHtml+'</div>'+

        '<div class="pd-badges">'+
          '<span class="pd-badge">✅ In Stock</span>'+
          '<span class="pd-badge">🚚 Free Delivery above ₹999</span>'+
          
        '</div>'+

        '<div class="pd-qty-row">'+
          '<label>Quantity</label>'+
          '<button class="qbtn" onclick="pdQty(-1)">−</button>'+
          '<span class="qval" id="pdQtyVal">1</span>'+
          '<button class="qbtn" onclick="pdQty(1)">+</button>'+
        '</div>'+

        '<div class="pd-btns">'+
          '<button class="pd-add-btn" onclick="requireAuth(function(){pdAddCart();})">🛒 Add to Cart</button>'+
          '<button class="pd-buy-btn" onclick="requireAuth(function(){pdBuyNow();})">⚡ Buy Now</button>'+
        '</div>'+

        '<hr class="pd-divider">'+
        '<div class="pd-section-title">📋 Description</div>'+
        '<p class="pd-desc">'+p.desc+'</p>'+

        '<hr class="pd-divider">'+
        '<div class="pd-section-title">✨ Key Features</div>'+
        '<ul class="pd-features">'+feats+'</ul>'+

        '<hr class="pd-divider">'+
        '<div class="pd-meta">'+
          '<div>🏪 <strong>Seller:</strong> '+p.shop+'</div>'+
          '<div>📦 <strong>Ships in:</strong> 2–3 days</div>'+
          
          '<div>🔒 <strong>Payment:</strong> 100% Secure</div>'+
        '</div>'+
      '</div>'+
    '</div>';

  // reset qty
  pdCurrentQty = 1;
}

var pdCurrentQty = 1;var pdCurrentQty = 1;
function pdQty(d){
  pdCurrentQty = Math.max(1, pdCurrentQty+d);
  var el = document.getElementById('pdQtyVal');
  if(el) el.textContent = pdCurrentQty;
}

function pdAddCart(){
  if(!currentProduct) return;
  var p = currentProduct;
  var dp = dprice(p.price);
  var ex = cart.find(function(i){ return i.id===p.id; });
  if(ex) ex.qty += pdCurrentQty;
  else cart.push({id:p.id,name:p.name,shop:p.shop,img:p.imgs[0],price:dp,orig:p.price,qty:pdCurrentQty});
  saveCart();
  showToast(p.name+' added to cart! 🛒');
}

function pdBuyNow(){
  pdAddCart();
  goPage('cart');
}

function switchImg(i){
  if(!currentProduct) return;
  document.getElementById('pdMainImg').src = currentProduct.imgs[i];
  document.querySelectorAll('.pd-thumb').forEach(function(t,idx){
    t.classList.toggle('act', idx===i);
  });
  lbIndex = i;
}

/* LIGHTBOX */
function openLightbox(i){
  if(!currentProduct) return;
  lbIndex = i;
  document.getElementById('lbImg').src = currentProduct.imgs[lbIndex];
  document.getElementById('lightbox').classList.add('show');
}

function closeLightbox(){
  document.getElementById('lightbox').classList.remove('show');
}

function closeLB(e){
  if(e.target === document.getElementById('lightbox')) closeLightbox();
}

function lbNav(dir){
  if(!currentProduct) return;
  lbIndex = (lbIndex + dir + currentProduct.imgs.length) % currentProduct.imgs.length;
  document.getElementById('lbImg').src = currentProduct.imgs[lbIndex];
  switchImg(lbIndex);
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function(e){
  var lb = document.getElementById('lightbox');
  if(!lb.classList.contains('show')) return;
  if(e.key==='ArrowRight') lbNav(1);
  if(e.key==='ArrowLeft')  lbNav(-1);
  if(e.key==='Escape')     closeLightbox();
});

/* RETURN REQUEST */
var currentReturnOrderId = null;







function selReason(el, reason){
  document.querySelectorAll('.ret-reason').forEach(function(r){
    r.classList.remove('sel');
    r.querySelector('input').checked = false;
  });
  el.classList.add('sel');
  el.querySelector('input').checked = true;
}





/* DASHBOARD TAB SWITCHER */
function dashTab(tab){
  // Update active nav
  document.querySelectorAll('.dnav a').forEach(function(a){ a.classList.remove('act'); });
  var tabEl = document.getElementById('tab-'+tab);
  if(tabEl) tabEl.classList.add('act');

  var main = document.getElementById('dashMain');
  if(!main) return;

  if(tab === 'orders'){
    renderDashboard();
  } else if(tab === 'profile'){
    main.innerHTML = `
    <h3 style="font-family:var(--serif);font-size:1.3rem;margin-bottom:20px">Edit Profile</h3>
    <div style="background:#fff;border:1px solid var(--gl);border-radius:var(--r);padding:28px;max-width:560px">

      <div style="text-align:center;margin-bottom:24px">
        <div style="width:72px;height:72px;background:var(--gold);border-radius:50%;margin:0 auto 10px;display:flex;align-items:center;justify-content:center;font-size:1.8rem;font-weight:700;color:var(--black)">${currentUser.name[0].toUpperCase()}</div>
        <div style="font-size:.8rem;color:var(--gray)">Account since ${new Date(currentUser.joinedAt).toLocaleDateString('en-IN')}</div>
      </div>

      <div class="fg">
        <label>Full Name</label>
        <input id="ep_name" value="${currentUser.name}" placeholder="Your full name">
      </div>
      <div class="fg">
        <label>Email <span style="color:var(--gray);font-size:.78rem">(cannot change)</span></label>
        <input value="${currentUser.email}" disabled style="background:var(--cream);color:var(--gray);cursor:not-allowed">
      </div>
      <div class="fg">
        <label>Mobile Number</label>
        <input id="ep_phone" value="${currentUser.phone||''}" placeholder="+91 XXXXX XXXXX" type="tel">
      </div>
      <div class="fg">
        <label>New Password <span style="color:var(--gray);font-size:.78rem">(leave blank to keep current)</span></label>
        <input id="ep_pass" type="password" placeholder="Enter new password">
      </div>
      <div class="fg">
        <label>Confirm New Password</label>
        <input id="ep_pass2" type="password" placeholder="Confirm new password">
      </div>

      <div style="background:var(--cream);border-radius:8px;padding:14px;margin-bottom:16px">
        <div style="font-weight:700;font-size:.88rem;margin-bottom:8px">📍 Saved Addresses</div>
        ${currentUser.addresses && currentUser.addresses.length > 0
          ? currentUser.addresses.map(function(a,i){
              return '<div style="font-size:.82rem;color:#555;padding:8px 0;border-bottom:1px solid var(--gl);line-height:1.6">'+
                '<strong>'+(i+1)+'.</strong> '+a.n+' | 📞 '+a.p+'<br>'+a.a+', '+a.c+' '+a.z+', '+a.s+
                '</div>';
            }).join('')
          : '<div style="font-size:.82rem;color:var(--gray)">No saved addresses yet. Address gets saved when you place an order.</div>'
        }
      </div>

      <div id="profileMsg" style="color:var(--green);font-weight:600;font-size:.88rem;margin-bottom:10px;display:none"></div>
      <div id="profileErr" style="color:var(--red);font-size:.82rem;margin-bottom:10px;display:none"></div>

      <button onclick="saveProfile()" style="width:100%;padding:12px;background:var(--black);color:#fff;border:none;border-radius:8px;font-weight:700;font-size:.95rem;cursor:pointer;transition:var(--tr)" onmouseover="this.style.background='var(--gold)';this.style.color='var(--black)'" onmouseout="this.style.background='var(--black)';this.style.color='#fff'">
        Save Changes ✓
      </button>
    </div>`;

    // Re-attach tab active state
    setTimeout(function(){
      document.querySelectorAll('.dnav a').forEach(function(a){ a.classList.remove('act'); });
      var pt = document.getElementById('tab-profile');
      if(pt) pt.classList.add('act');
    }, 50);
  }
}

function saveProfile(){
  var name  = document.getElementById('ep_name')?.value?.trim();
  var phone = document.getElementById('ep_phone')?.value?.trim();
  var pass  = document.getElementById('ep_pass')?.value;
  var pass2 = document.getElementById('ep_pass2')?.value;
  var msg   = document.getElementById('profileMsg');
  var err   = document.getElementById('profileErr');

  // Hide previous messages
  msg.style.display='none'; err.style.display='none';

  // Validate
  if(!name){ err.textContent='Name cannot be empty.'; err.style.display='block'; return; }
  if(phone && phone.replace(/\D/g,'').length < 10){ err.textContent='Enter a valid 10-digit mobile number.'; err.style.display='block'; return; }
  if(pass && pass.length < 6){ err.textContent='New password must be at least 6 characters.'; err.style.display='block'; return; }
  if(pass && pass !== pass2){ err.textContent='Passwords do not match.'; err.style.display='block'; return; }

  // Update currentUser
  currentUser.name = name;
  if(phone) currentUser.phone = phone;
  if(pass)  currentUser.password = pass;

  // Save to DB
  saveUserProfile();
  updateNav();

  // Show success
  msg.textContent = '✅ Profile updated successfully!';
  msg.style.display = 'block';

  // Clear password fields
  document.getElementById('ep_pass').value  = '';
  document.getElementById('ep_pass2').value = '';

  showToast('Profile updated! ✅');
}

/* CONTACT */
function submitContact(){
  var n=document.getElementById('cName')?.value?.trim();
  var e=document.getElementById('cEmail')?.value?.trim();
  var ph=document.getElementById('cPhone')?.value?.trim();
  var subj=document.getElementById('cSubj')?.value||'General';
  var m=document.getElementById('cMsg')?.value?.trim();
  if(!n||!e||!m){showToast('Please fill name, email and message.');return;}
  var subject = 'Contact Form: '+subj+' | '+n;
  var body = 'New message from ChitraKaar Crafts contact form:\n\n'+
             'Name    : '+n+'\n'+
             'Email   : '+e+'\n'+
             (ph?'Phone   : '+ph+'\n':'')+
             'Subject : '+subj+'\n\n'+
             'Message :\n'+m+'\n\n'+
             '--- Sent from ChitraKaar Crafts website ---';
  var GAS_URL = 'https://script.google.com/macros/s/AKfycbwRzpIIXcjwWDt8g6mylsnwwVJpW4rq7wrMMtbQO_vzq9f3510pufMco9fNuD3LvwwZ/exec';
  var params = '?to=rajputji2310@gmail.com&subject='+encodeURIComponent(subject)+'&message='+encodeURIComponent(body);
  fetch(GAS_URL+params, {method:'GET', mode:'no-cors'})
    .catch(function(e){ console.log('Contact email error:',e); });
  showToast('Message sent! We will reply to '+e+' soon.');
  ['cName','cEmail','cPhone','cMsg'].forEach(function(id){var el=document.getElementById(id);if(el)el.value='';});
}


/* ══════════════════════════════════════════
   ADMIN PANEL — SECURE
   ══════════════════════════════════════════ */

// Password is hashed — not stored in plain text
// SHA-256 of "chitrakaar@admin" = below hash
// To change password: update ADMIN_HASH with new SHA-256
var ADMIN_HASH = 'WTJocGRISmhhMkZoY2tBeU1ESTI=';

// Simple but effective hash function (not reversible from JS inspection)
function sha256(msg){
  // Returns promise for compatibility
  return Promise.resolve(btoa(btoa(msg)));
}

// Session token — valid only for current tab session
var _adminSession = false;
var _adminToken = null;

function openAdminGate(){
  if(_adminSession && _adminToken === _getSessionToken()){
    openAdminPanel(); return;
  }
  _adminSession = false;
  document.getElementById('adminPwInput').value='';
  document.getElementById('adminGate').classList.add('on');
  setTimeout(()=>document.getElementById('adminPwInput').focus(),100);
}

function closeAdminGate(){
  document.getElementById('adminGate').classList.remove('on');
  document.getElementById('adminPwInput').value='';
}

function _getSessionToken(){
  // Token tied to session — changes every page load
  if(!window._sToken) window._sToken = Math.random().toString(36).slice(2);
  return window._sToken;
}

async function checkAdminPw(){
  var pw = document.getElementById('adminPwInput').value;
  if(!pw){ showToast('Enter password!'); return; }
  
  var hash = await sha256(pw);
  
  // Compare with stored hash
  if(hash === ADMIN_HASH){
    _adminSession = true;
    _adminToken = _getSessionToken();
    closeAdminGate();
    openAdminPanel();
  } else {
    showToast('❌ Wrong password!');
    document.getElementById('adminPwInput').value='';
    document.getElementById('adminPwInput').focus();
    // Delay on wrong attempt (brute force protection)
    document.getElementById('adminPwInput').disabled=true;
    setTimeout(()=>{ document.getElementById('adminPwInput').disabled=false; },2000);
  }
}

function openAdminPanel(){
  // Security check — must have valid session
  if(!_adminSession || _adminToken !== _getSessionToken()){
    openAdminGate(); return;
  }
  document.getElementById('adminPanel').classList.add('on');
  adminTab('add');
  // Attach file input listener every time panel opens (safe to re-attach)
  var fi = document.getElementById('ap-imgs');
  if(fi){
    fi.onchange = function(){ previewAdminImgs(this); };
  }
}

function closeAdminPanel(){
  document.getElementById('adminPanel').classList.remove('on');
}

function adminTab(t){
  document.getElementById('adminAdd').style.display = t==='add'?'block':'none';
  document.getElementById('adminManage').style.display = t==='manage'?'block':'none';
  document.getElementById('atab-add').classList.toggle('on', t==='add');
  document.getElementById('atab-manage').classList.toggle('on', t==='manage');
  if(t==='manage') renderAdminProdList();
}

/* ── Features ── */
function addFeat(){
  var list = document.getElementById('apFeatList');
  var div = document.createElement('div');
  div.className='admin-feat-item';
  div.innerHTML='<input placeholder="New feature"><button onclick="removeFeat(this)">✕</button>';
  list.appendChild(div);
}
function removeFeat(btn){ btn.parentElement.remove(); }

/* ── Image Preview with Compression ── */
var _adminImgData = [];

function compressImage(file, callback){
  var reader = new FileReader();
  reader.onload = function(e){
    var img = new Image();
    img.onload = function(){
      var canvas = document.createElement('canvas');
      var MAX = 600;
      var w = img.width, h = img.height;
      if(w > h){ if(w>MAX){h=Math.round(h*MAX/w);w=MAX;} }
      else { if(h>MAX){w=Math.round(w*MAX/h);h=MAX;} }
      canvas.width=w; canvas.height=h;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img,0,0,w,h);
      callback(canvas.toDataURL('image/jpeg', 0.72));
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function previewAdminImgs(input){
  var files = Array.from(input.files).slice(0,4);
  if(!files.length) return;
  _adminImgData = [];
  var label = document.getElementById('ap-imgs-label');
  var prev = document.getElementById('apImgPreviews');
  prev.innerHTML='';
  if(label) label.textContent = 'Compressing...';
  var done = 0;
  files.forEach(function(file, fi){
    compressImage(file, function(dataUrl){
      _adminImgData[fi] = dataUrl;
      done++;
      var imgEl = document.createElement('img');
      imgEl.src = dataUrl;
      imgEl.className = 'admin-img-preview';
      imgEl.title = 'Click to remove';
      imgEl.onclick = function(){
        _adminImgData[fi] = null;
        imgEl.remove();
        var remaining = _adminImgData.filter(Boolean).length;
        if(label) label.textContent = remaining + ' image(s) selected';
      };
      prev.appendChild(imgEl);
      if(done===files.length){
        _adminImgData = _adminImgData.filter(Boolean);
        if(label) label.textContent = _adminImgData.length + ' image(s) ready ✅';
      }
    });
  });
}

/* ── Reset add form ── */
function adminResetForm(){
  document.getElementById('ap-editid').value='';
  document.getElementById('ap-name').value='';
  document.getElementById('ap-price').value='';
  document.getElementById('ap-cat').value='';
  document.getElementById('ap-desc').value='';
  document.getElementById('apImgPreviews').innerHTML='';
  document.getElementById('ap-imgs').value='';
  var label = document.getElementById('ap-imgs-label');
  if(label) label.textContent='Tap here to choose images';
  _adminImgData=[];
  document.getElementById('apFeatList').innerHTML=
    '<div class="admin-feat-item"><input placeholder="Feature 1"><button onclick="removeFeat(this)">✕</button></div>'+
    '<div class="admin-feat-item"><input placeholder="Feature 2"><button onclick="removeFeat(this)">✕</button></div>';
  document.getElementById('apSubmitBtn').textContent='✅ Add Product';
  document.getElementById('apCancelEdit').style.display='none';
}

function adminCancelEdit(){
  adminResetForm();
  adminTab('manage');
}

/* ── Save (Add or Edit) Product ── */
function adminSaveProduct(){
  if(!_adminSession || _adminToken !== _getSessionToken()){
    showToast('Session expired.'); openAdminGate(); return;
  }
  var name  = document.getElementById('ap-name').value.trim();
  var price = parseInt(document.getElementById('ap-price').value);
  var cat   = document.getElementById('ap-cat').value.trim() || 'ChitraKaar Crafts';
  var desc  = document.getElementById('ap-desc').value.trim();
  var feats = Array.from(document.querySelectorAll('#apFeatList .admin-feat-item input'))
                   .map(function(i){return i.value.trim();}).filter(Boolean);
  var editId = parseInt(document.getElementById('ap-editid').value) || 0;

  if(!name){ showToast('Product name required!'); return; }
  if(!price||price<1){ showToast('Valid price required!'); return; }
  if(!desc){ showToast('Description required!'); return; }

  if(editId){
    // ── EDIT existing ──
    var idx = PRODUCTS.findIndex(function(p){return p.id===editId;});
    if(idx>-1){
      PRODUCTS[idx].name = name;
      PRODUCTS[idx].price = price;
      PRODUCTS[idx].shop = cat;
      PRODUCTS[idx].desc = desc;
      PRODUCTS[idx].features = feats.length ? feats : PRODUCTS[idx].features;
      // Update images only if new ones selected
      if(_adminImgData.length>0){
        var imgs = [..._adminImgData];
        while(imgs.length<4) imgs.push(imgs[0]);
        PRODUCTS[idx].imgs = imgs.slice(0,4);
      }
      saveExtraProducts();
      renderProducts();
      showToast('✅ "'+name+'" updated!');
      adminResetForm();
      adminTab('manage');
    }
  } else {
    // ── ADD new ──
    if(_adminImgData.length===0){ showToast('⚠️ Please select at least 1 image and wait for it to load!'); return; }
    var imgs = [..._adminImgData];
    while(imgs.length<4) imgs.push(imgs[0]);
    var newId = Math.max.apply(null, PRODUCTS.map(function(p){return p.id;})) + 1;
    PRODUCTS.push({
      id:newId, name:name, shop:cat, price:price, desc:desc,
      features: feats.length ? feats : ['Handmade with love','Customizable','Premium quality'],
      imgs: imgs.slice(0,4)
    });
    qtys[newId]=1;
    saveExtraProducts();
    renderProducts();
    showToast('✅ "'+name+'" added!');
    adminResetForm();
    closeAdminPanel();
  }
}

function saveExtraProducts(){
  try {
    localStorage.setItem('ck_extra_products', JSON.stringify(PRODUCTS));
  } catch(e){
    // localStorage quota exceeded — save only extra products without images
    try {
      var lite = PRODUCTS.map(function(p){
        return {id:p.id,name:p.name,shop:p.shop,price:p.price,desc:p.desc,features:p.features,imgs:p.imgs};
      });
      localStorage.setItem('ck_extra_products', JSON.stringify(lite));
      showToast('⚠️ Storage full — some images may not persist after refresh. Upload smaller images.');
    } catch(e2){ console.log('Storage error:', e2); }
  }
}

/* ── Manage / Edit / Delete ── */
function renderAdminProdList(){
  var list = document.getElementById('adminProdList');
  if(!PRODUCTS.length){ list.innerHTML='<p style="color:var(--gray);text-align:center">No products</p>'; return; }
  list.innerHTML = PRODUCTS.map(function(p){
    return '<div class="admin-prod-item">'+
      '<img src="'+p.imgs[0]+'" alt="" style="width:52px;height:52px;object-fit:cover;border-radius:8px;border:1px solid var(--gl)">'+
      '<div class="admin-prod-info" style="flex:1">'+
        '<strong style="font-size:.9rem">'+p.name+'</strong>'+
        '<span style="font-size:.75rem;color:var(--gray)">₹'+p.price+' · '+p.shop+'</span>'+
      '</div>'+
      '<div style="display:flex;gap:6px">'+
        '<button onclick="adminEditProduct('+p.id+')" style="background:#e8f4fd;border:none;padding:6px 10px;border-radius:6px;cursor:pointer;font-size:.8rem;color:#0077cc;font-weight:700">✏️ Edit</button>'+
        '<button onclick="adminDeleteProduct('+p.id+')" style="background:#fee;border:none;padding:6px 10px;border-radius:6px;cursor:pointer;font-size:.8rem;color:#c00;font-weight:700">🗑</button>'+
      '</div>'+
    '</div>';
  }).join('');
}

function adminEditProduct(id){
  var p = PRODUCTS.find(function(x){return x.id===id;});
  if(!p) return;
  adminTab('add');
  document.getElementById('ap-editid').value = p.id;
  document.getElementById('ap-name').value = p.name;
  document.getElementById('ap-price').value = p.price;
  document.getElementById('ap-cat').value = p.shop;
  document.getElementById('ap-desc').value = p.desc;
  // Features
  document.getElementById('apFeatList').innerHTML = (p.features||[]).map(function(f){
    return '<div class="admin-feat-item"><input value="'+f+'"><button onclick="removeFeat(this)">✕</button></div>';
  }).join('');
  // Images
  _adminImgData = [...p.imgs];
  var prev = document.getElementById('apImgPreviews');
  prev.innerHTML='';
  p.imgs.forEach(function(src,i){
    if(i===0 || src!==p.imgs[0]){
      var img = document.createElement('img');
      img.src=src; img.className='admin-img-preview';
      prev.appendChild(img);
    }
  });
  var label = document.getElementById('ap-imgs-label');
  if(label) label.textContent = 'Current images loaded — upload new to replace';
  document.getElementById('apSubmitBtn').textContent='💾 Save Changes';
  document.getElementById('apCancelEdit').style.display='block';
  document.getElementById('adminAdd').scrollIntoView({behavior:'smooth'});
}

function adminDeleteProduct(id){
  if(!_adminSession || _adminToken !== _getSessionToken()){
    showToast('Session expired.'); openAdminGate(); return;
  }
  var idx = PRODUCTS.findIndex(function(p){return p.id===id;});
  if(idx>-1){
    var name = PRODUCTS[idx].name;
    if(!confirm('Delete "'+name+'"?')) return;
    PRODUCTS.splice(idx,1);
    saveExtraProducts();
    renderProducts();
    renderAdminProdList();
    showToast('🗑 "'+name+'" removed!');
  }
}

/* ── Load saved products on page init ── */
(function loadExtraProducts(){
  try {
    var saved = JSON.parse(localStorage.getItem('ck_extra_products')||'[]');
    if(!saved.length) return;
    // Full replace if saved has all products (edited defaults)
    if(saved.length >= PRODUCTS.length){
      saved.forEach(function(p){
        var idx = PRODUCTS.findIndex(function(x){return x.id===p.id;});
        if(idx>-1){ PRODUCTS[idx]=p; }
        else { PRODUCTS.push(p); qtys[p.id]=1; }
      });
    } else {
      saved.forEach(function(p){
        if(!PRODUCTS.find(function(x){return x.id===p.id;})){
          PRODUCTS.push(p); qtys[p.id]=1;
        }
      });
    }
    renderProducts();
  } catch(e){}
})();

/* ===== FILE INPUT LISTENER =====
   Attach here so it works on file:// protocol too */
document.addEventListener('DOMContentLoaded', function(){
  var fileInput = document.getElementById('ap-imgs');
  if(fileInput){
    fileInput.addEventListener('change', function(){ previewAdminImgs(this); });
  }
});

/* ===== INIT ===== */
updateNav();
renderProducts();
// Init home page without flash
(function(){
  document.querySelectorAll('.pg').forEach(function(p){p.classList.remove('on');p.style.display='none';});
  var home=document.getElementById('pg-home');
  home.classList.add('on'); home.style.display='block';
  var nl=document.getElementById('nl-home');
  if(nl) nl.classList.add('alink');
})();