'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9094bdf07f30e3499aaec0301d7ca944",
".git/config": "893175d2494ae4c3acb54cdcc73514f1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ee023a7cc22a4737052dcd6053c303bb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2e22316a21112b53bcd1275f559d350a",
".git/logs/refs/heads/main": "e41a82d5194aacf3bce4daf1558b3513",
".git/logs/refs/remotes/origin/main": "195e6abd812c3621f8517c413e4f6983",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/03/944f33a01d1623ad845183cdae8598d0451b6e": "1a2f389ac1cecd4cd2e69cf974ac977d",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0c/7e2028f3f1bd5e9b97ab17cd3a33e66babb500": "65478e01bb1ca58e10e8bcefbc1bcf25",
".git/objects/0f/094774d508d805d667d9928540551027350de6": "c1ad40f7c2703288763f642639fd58c6",
".git/objects/11/239e027740d02370f92be48d664bdcf0a41408": "63ad0138bee74b9c0312a8dde8d59deb",
".git/objects/16/1ffa64f7d90929506fa377b46ee9605f6c5949": "21a3998e7ef843fad88a6960210a5b82",
".git/objects/17/476a383dc32407038689431e529f045e7927b9": "ad57d3e1591a9cd246a60be93d286155",
".git/objects/1e/c0c8a0258ab3ce77dc2d68b4e31225029b10b7": "9f17c8448f71827f2636f41907f7d13f",
".git/objects/21/43ae3ed4edf67035a01061f6bbdc6316aed802": "339fc07e34aa389b2c5f4d716b025e97",
".git/objects/21/519127b513e8d6107fc754e491712e27b6c338": "3bab2b5c0370905f4df477a394573630",
".git/objects/23/d8136b1001fe367b8a977274e49abb3afd311c": "a02b752b110fb9d121f807514a68d934",
".git/objects/24/209aabcb7257c3a7f38b029b12e4747cf26b84": "9b69d9da9b6d92f1ff3eca4ae7c1c85d",
".git/objects/28/bb25c081bae70f1416563aa4ceab9dc40a9512": "3b14e17b3c3d9bed6e23b1ca2418a243",
".git/objects/2b/f1b2a0ec80cbbd6dc1983c5a8870daf14b1148": "49cb9edb4108752a308b092e58d519b1",
".git/objects/2d/c24a5976eafbbbe29ec13af93ea139db8ac422": "a83e77e2860556b42c025626a01a9095",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/34/6834738341e54cdd6f154ec8e8d0961b8715a2": "17d88e55d5f4501be5eb0fe11ac7f097",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/cf8ab67bbc77397f0918b30daa0e969828f704": "c7908d00792303a9aabf6c0996d1dcd8",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/38/f1434a98cb282178ee39ebeb588626d21d436c": "63e221022157970039fb20e1216135c4",
".git/objects/3e/9b1d5c2fe695defa541c0c74875ac535577b93": "a68dd70a24d7aaa3231400c14c046892",
".git/objects/43/9f4043b3cbdcec924a121f398eff68e3448e0a": "0c1af37ddef4b4f194ce5be6980f315f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/f6f96948a44f13eaa2e1ae79abed5ba0f1bf30": "180f3bb55c6a2ffdd86ee64c970c3823",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4f/3efc618842effff64981af02a39fa88fc2e5f5": "04029739eb5810e0e7477deb8142eb2a",
".git/objects/53/6c73b6e9f3e5393c6086e071ce87f00b9a31db": "a8d9defa122038893a087cb2ac2b4d02",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/ffac38a9ede4e96ad3294d387bd0dfce3966c7": "9c5746f0c6ed11e4f02dbeb0ede090c7",
".git/objects/5e/7184d3b01e03b0300221b479448023a7060f66": "3721e75613cdeb9fd70fa8ef4611a13d",
".git/objects/62/93b5019ced07f49e05d9850e18a31cbaf3521e": "3b79b518bcfa2c7169cab8fc94aaa919",
".git/objects/66/11501f6871fdf910d42495db199b95318976e4": "0b726d02e5b5add34e1015def411d33a",
".git/objects/67/79b78f8fb5039b88e3e23530afd0e848dadfca": "db4e7a14633737e2018f714878de5d03",
".git/objects/69/0a8d279821fb558a950ac185222c53aa85d0ad": "db5e132c693aa21e070f90b75d3ae756",
".git/objects/69/504f30a858892f24eabbc38c1cf2ad6cdaa2c9": "df2e5fa231585e7f224c16e2482ac9f6",
".git/objects/6b/77c5d914c5403f9b339711302bd0cf8d1fc51f": "39bc99c2462735ef472f2e778ef0d213",
".git/objects/6c/7c795d95a55f38836d41f760d0001b60deaa62": "6bd3b4c0d14657dc3df462c0ed97d60f",
".git/objects/6e/3d23f9b0785d14e9fbf423e10a124a8dd4cd7d": "4f8ed7dd4061e9cca71e11861fe27ece",
".git/objects/72/1b5dfa0dd5982047bc695eda1c52a778ef86eb": "596c77ff00e333018ab1a73b03fe8b2c",
".git/objects/76/2925be27b1573a5a25521c660e9cbfd78d6945": "5ef5dab22c7bab72cb076d0466bf8bf2",
".git/objects/77/c44a5b130a56362a008d1d91b01c752cbaf87b": "5f24aa6199053aa56adf127b2feabe99",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/7a/0cae00185b8ef89a69b1f322fd93a8eff4aaec": "370fc4786f955789ecd4cd854b69ebf2",
".git/objects/7c/7ba7070a2abae73056d3c16f292628971e382b": "0f89a00cf0edf2cb232c8b66bbb93cd3",
".git/objects/7d/cd6c0a72eeb542995afb3e1e2e9f2083d75eee": "43119f2ebedd64fac6bfc66423b5ef3a",
".git/objects/82/c6de3a1def877539e617ef1c7266c1952665b8": "69b115335f6bdae2bec41d67c86c664f",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/84/775cee04fa10e407aaa5db1e0e9e3da550c9d6": "a9c16061aebd4822b541f8974a700f48",
".git/objects/84/a7af51b6865732fb7ecb7b613e6fa6fd0279ab": "51982a0ad05258e1279afb1c06a7ac73",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9b6a8084950742b2bbd372808b2911b768445f": "e4585fba6a6474b7c883cdda2269bab3",
".git/objects/89/af8727594845701da6e7fb689dc0c2b75f7dac": "42f74c2a2bd609ce1c0789070e67e85c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8c/05ea7c691e1c17852f9c570afcc13f6f4f8241": "dd49498ea4a2dada7e19ad9d7351cc3b",
".git/objects/8d/5a4b407e87bb27c1e01b1c7f69ead095bc94a5": "7fa8df66c58cbd29350d3f924f5794e3",
".git/objects/8e/17fec63ac557d99ca65095bf0728cecdd6609d": "0e9ed955c5a7514cf952452629a1e7c9",
".git/objects/94/81e6633ddda418d92733e155c8dde45b6a8148": "06c4fd90d998fe08aaec6b91335b10d1",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ad/145a5ac765fa032ba9ecfe9ed860054e348f5c": "a6fc65bbda553c428528ea84db662c96",
".git/objects/ae/7228c4d6eaab5f429488b9b02350d27f508ab3": "579667ef0b62b440986fd7e26ec1f279",
".git/objects/af/b5cfb6611473ba416894475e84a0bd4e7e82e0": "ecad7042dea94e91bd741a349e8f3f96",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/4f1d70c5a35531ac38e5975c181a68036221f9": "e65b1b4dc89bc12a7b2cfacc60716e81",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/e12571c0d442e5c659eb5f17af228f46b905d2": "d7df7f80cdfba132bdef8936a2716b83",
".git/objects/c8/29fb281ff9cfa95d15b6d972968a82cfaae580": "c31c15bf466bcab2cf98786ce8360cd8",
".git/objects/d0/d2fbda1d8408882b86c4814be9b10fa1f2ae94": "599483934f52425af02d94fc2deb5e1c",
".git/objects/d1/136d09d2dd26af23417a9b477455ae5d079ad2": "9cc765550977d6e2466e107db945ebfd",
".git/objects/d2/3551751b29e2ea4c62ec6a1f33f426990f1d75": "d91457be08ad504bec78c00a9ea1a303",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/fa321fb19ec5f6676127b05e5eb326cc83fae2": "239835751b8cf88137d0c1dc0f55f80f",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/1b90487039c0cf367a95f4e5b61e26a6fcd76f": "eca9932af5f7b9c6e75156978e7faa75",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/a141a466e2f6ae5f8a62f56e99c24a61a77df7": "32122934fc7f61f3dc355757f842a86b",
".git/objects/da/425b851c1e28203b7d846356a0c7a0ff44badf": "3f0029c641930a83f1e49eea60a15466",
".git/objects/da/9d8cea2657e128ddf6c8da1f7ac86daa464590": "212ef29cdf8ea8ea49eeb4abae40e1bd",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/dc/11390ad0d6f79048d13ddf9d23a83aa6c98d4c": "59db5241933999a42d045a7cb43d3ee0",
".git/objects/dd/86831654fc5f006228e47b96223ebbe6790590": "ed4ba72735ae9640f3fffc538fe76e19",
".git/objects/de/6546b6234bf393940384c1f280e21082655c5b": "8dfff26a755079a1477b99be7d0eb91c",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/436363815d5fd196ee0bc0f578e03e31c0be8a": "0c4973150ebaa62f079976a9d176fb1e",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e5/ebb146be96e50d7526fb5a139b8b07d23c06ed": "6f158e52f0d4412b653593f315282b77",
".git/objects/e6/81516a385c936d99c2e00e879e77cd855376eb": "c97c02e881aa8ebaf2475d671c84e0fd",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/2373b7297e869c427972feb5df9cabf1dd2789": "eb34bfa6c136244ddd7a61d192e69bc5",
".git/objects/ef/b8a2a86fcdcc0ad37b61421d2e700bf9659fe3": "7fb1b62bfff0da047ad78e964ac220ca",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/f5/e0e21f661bfb737caeaf1d34e7aaee4f8d8d4a": "17f12b22ee830ab156594f5a3d1b4f83",
".git/objects/f6/135c7ef9dc22209cb718ae14ac8af5cb08619f": "43ab55aad23747fbdbf4ec3395ea0489",
".git/objects/f6/9ef4055694426385600689550097ec7a38d869": "9015f8ba21cd44682810478f58af950c",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fb/3f5886b4f503291995d7550f2538b38f36d8db": "286cf871371af4d30d8981f0c1866502",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/59cfd6cd9f46b1e4810e55f55f694113f26108": "53beb1137e27d33fe82f205cd251d88b",
".git/objects/fe/3e1c498d9e09be686bd483f97ad513954e5520": "d9a84ba62020c87c08f46f756c55fcec",
".git/refs/heads/main": "94e54193ddb78e80f302594c582ae64d",
".git/refs/remotes/origin/main": "94e54193ddb78e80f302594c582ae64d",
"assets/asset/images/Gejser%2520Cocktailmenu.pdf": "66736eeadc35a3663a0bcedf17a6a468",
"assets/asset/images/gejserbarlogo.png": "3d454f5875b0ca62439e8a786c66d9b4",
"assets/asset/images/gejserbarlogo2.jpg": "884cde78294fc7cc03669a771cd3ee31",
"assets/asset/images/gejserbarlogo3.jpg": "6ea1064444e3a593b821948d75333cb5",
"assets/asset/images/goldplateblackanimated.gif": "f59a530146399432f70b42381f86b0f2",
"assets/asset/images/goldplateblackanimated2.gif": "8bef1b1c8eefb8fb2306efff19ed637c",
"assets/asset/images/goldplateblackbg.png": "b17ca18cd2f29af9e133426c2813d985",
"assets/asset/images/goldplateblackbgwithtext.png": "40e299499fa11713e5cf4fefa0f2b8b2",
"assets/asset/images/Guldkort.jpg": "92e051f96e81d9de9c0784238932a431",
"assets/asset/images/Guldkort_noexpdate.jpg": "e697d70e63dbaec5f528adf56e2e75e3",
"assets/asset/images/Guldkort_noexpdate_640x1136.jpg": "426c8fc6da01fcf49849878180a59d75",
"assets/asset/images/Guldkort_noexpdate_640x1136_notvalid.jpg": "426c8fc6da01fcf49849878180a59d75",
"assets/AssetManifest.bin": "3d2de6c328d8e4d1d2b7f410c6ae1a5e",
"assets/AssetManifest.json": "80f09132579bf3c7bb56c530075a5889",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "a2f69a3345bca672a6262034d1af6a9e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "94cda9d14db3e3878d2f104aa1126507",
"/": "94cda9d14db3e3878d2f104aa1126507",
"main.dart.js": "2c10ec9093eca69e5d1013f87c8370b6",
"manifest.json": "171c9041f26daf2bc0be8644397dfbf4",
"version.json": "eb535b826fea9bb317f224926292dc73"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
