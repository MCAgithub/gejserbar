'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "596a6b5d7442ba93b1cbb259c1c741af",
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
".git/index": "7a1c92adc14fc2386ddc024e1df1c9c4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3a8bc71eb94327ff064480dc774872a4",
".git/logs/refs/heads/main": "ec4940ef7c9c257f176bb435c8b21320",
".git/logs/refs/remotes/origin/main": "f4108ab3bbc5be92d0d1c200c7557562",
".git/objects/01/4deac64e424e3e10383f7483eee444e976463f": "2d6a2a7ab36d214af5fc0c82dee75a14",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/03/261c9d85017049d9f810a9fe4d4f6aa5bdea5d": "09ed3d27fe3990366f3986d22b3afc7a",
".git/objects/03/944f33a01d1623ad845183cdae8598d0451b6e": "1a2f389ac1cecd4cd2e69cf974ac977d",
".git/objects/03/e1beab1b9689fc83f61bb64c19a8c831049b0c": "41af54f3be31ccbee5d4ba132eee2f09",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/07/15be505bf816c50af47106753f4fef2f23d17a": "b3fe3c343059285abff239ecf7b00a24",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0b/20f973fab6ba3fa237c2bb0392579b61e36dad": "f88f92d984c98cb0f5ebb32aecf79447",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0c/7e2028f3f1bd5e9b97ab17cd3a33e66babb500": "65478e01bb1ca58e10e8bcefbc1bcf25",
".git/objects/0d/bff57e869eb34067505f3a1ace21b51a8de716": "6da5316ce6c828397d5295cdeb647798",
".git/objects/0e/cfadbe95eaf75eba4f829bc7e6d094bbd0b292": "095a991d42349d7137a5134e220cc2a7",
".git/objects/0f/094774d508d805d667d9928540551027350de6": "c1ad40f7c2703288763f642639fd58c6",
".git/objects/0f/a7e1741e2a3a90a691117c72e2159ecf1c54d5": "9a6a24d0491e81cebb1a3f4d2afc47ed",
".git/objects/10/ad2847cd78db7e9aa62d58cc6f34c1826dd63e": "5d7a3f72d56d23d2c9e5e0bec804ae21",
".git/objects/11/239e027740d02370f92be48d664bdcf0a41408": "63ad0138bee74b9c0312a8dde8d59deb",
".git/objects/14/1ae98ef2258c88432f951e537d65c6716bcc9e": "de373ba04f3713a674e8dd29352cee98",
".git/objects/15/0c37b2eff9e8de8367c75f6ca10e6670b8d89d": "cd17818ef3d7b21eb7179c96b27fd202",
".git/objects/15/0f55ac034870fe643a0ca40d7bea5dcec27af0": "3463ff1193d458e971d4d728d7e69a0b",
".git/objects/16/1ffa64f7d90929506fa377b46ee9605f6c5949": "21a3998e7ef843fad88a6960210a5b82",
".git/objects/17/476a383dc32407038689431e529f045e7927b9": "ad57d3e1591a9cd246a60be93d286155",
".git/objects/17/c0542f4c8a5624e5d5b08e40e6c57018597ba1": "266a33b6b60a57fdfab884451e527d7c",
".git/objects/18/34ac876d8a1dc90a42b7c9d6ab1cbde96ab55a": "d6a129d4adf5d9a3c21d0ea0eec55201",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1e/c0c8a0258ab3ce77dc2d68b4e31225029b10b7": "9f17c8448f71827f2636f41907f7d13f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/43ae3ed4edf67035a01061f6bbdc6316aed802": "339fc07e34aa389b2c5f4d716b025e97",
".git/objects/21/519127b513e8d6107fc754e491712e27b6c338": "3bab2b5c0370905f4df477a394573630",
".git/objects/21/d1c18140ecf634b68c1733e44c3dc456e7a7f1": "2bfaa04e81ad876c67ccc5e16f25e70c",
".git/objects/23/d8136b1001fe367b8a977274e49abb3afd311c": "a02b752b110fb9d121f807514a68d934",
".git/objects/24/209aabcb7257c3a7f38b029b12e4747cf26b84": "9b69d9da9b6d92f1ff3eca4ae7c1c85d",
".git/objects/27/0d961b5296fd5fd4d0c2732f9278203a53a4d6": "cef0fd978d2f0cbfafaa2cff12133c73",
".git/objects/28/bb25c081bae70f1416563aa4ceab9dc40a9512": "3b14e17b3c3d9bed6e23b1ca2418a243",
".git/objects/2b/f1b2a0ec80cbbd6dc1983c5a8870daf14b1148": "49cb9edb4108752a308b092e58d519b1",
".git/objects/2c/02f1636a482b45c31a5085dd3806f1a1739c72": "ba57acc56b8103bf492ad2ae35ce4422",
".git/objects/2d/c24a5976eafbbbe29ec13af93ea139db8ac422": "a83e77e2860556b42c025626a01a9095",
".git/objects/2d/df51fa2b357a6701e5d76102d115618ca5ed8d": "6ae1acdb5e00580de6029abd34826456",
".git/objects/2e/9bc4f6b79685fcf6d4b02d19648cd08d41dcf0": "9843820bd49a5e91062bbe854635b0c9",
".git/objects/2e/cfa46128a1c69b95b8f5d7ed0d66f5ad064a21": "9be475db659db8cbbb6cb74e2e2ad8ad",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/32/97fc562587db888b87da58858b0d7f940ad2ae": "15a5b30d1ef3a5836547e1db90e17466",
".git/objects/33/fb94fedea72d69e3c0f4d9ccd621a063ae56d1": "83fc294ecfbd2b509ffd28a77abbad5c",
".git/objects/34/6834738341e54cdd6f154ec8e8d0961b8715a2": "17d88e55d5f4501be5eb0fe11ac7f097",
".git/objects/35/059d04e6b5facb2b40fd51d2ef5c15aea6552b": "d5dd2fa4619da1892a1cfbace4f07332",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/cf8ab67bbc77397f0918b30daa0e969828f704": "c7908d00792303a9aabf6c0996d1dcd8",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/38/f1434a98cb282178ee39ebeb588626d21d436c": "63e221022157970039fb20e1216135c4",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3a/8f133d6b2be2f2a39293a330f4522d4d44ddfa": "c9b5ea8b57b418b1f1113cd29ae68f21",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3e/9b1d5c2fe695defa541c0c74875ac535577b93": "a68dd70a24d7aaa3231400c14c046892",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/9f4043b3cbdcec924a121f398eff68e3448e0a": "0c1af37ddef4b4f194ce5be6980f315f",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/f6f96948a44f13eaa2e1ae79abed5ba0f1bf30": "180f3bb55c6a2ffdd86ee64c970c3823",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/848a346c83a1080efa5ff09247aa7c4c69146a": "f8e6090bfe1b2d358ccf6a7cb4683cde",
".git/objects/49/cb08ff24343760bc185f6792954f8dba333a7e": "561d9b3994d5efc08bd3cc22a8fb024d",
".git/objects/4a/6894e42264d3b627d6f9a5ab80060de2b7827a": "d2770fce27641e94f600d48e8b5d1817",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4f/3efc618842effff64981af02a39fa88fc2e5f5": "04029739eb5810e0e7477deb8142eb2a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/4f/f216abe0c4d7360c51d49dbc41c749876c3026": "be54e34c7a4980548e5d776306d30180",
".git/objects/50/2d8d237b4d7b76f4410e6305a51b66ee8c8520": "ff183b8f679943591a24db4ea934f884",
".git/objects/52/00b910daae3093a95d949a538ca66a7a031bcd": "480a13e8e676b80acf9a3ffc94ad3951",
".git/objects/53/6c73b6e9f3e5393c6086e071ce87f00b9a31db": "a8d9defa122038893a087cb2ac2b4d02",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/278cdcc315a357afbb917d941bfb4056f89c4b": "3f85ae8e5237447f1cc0f60f662cf5e7",
".git/objects/57/6e63fa14efe76cade425e15f54e93ad20c9d65": "6156b9c413c59aa21109c2bc203d8214",
".git/objects/59/65809037fe40a97fe0c06801158962d76b8ec0": "48a2fa1bb2f70e028b912bff4d95e1fe",
".git/objects/59/eb1f4be26f77646f65dd24f57e6d2195b06425": "df0fa8965328faa78c6831a88afbb518",
".git/objects/59/ffac38a9ede4e96ad3294d387bd0dfce3966c7": "9c5746f0c6ed11e4f02dbeb0ede090c7",
".git/objects/5b/ffcc67182f2df000a5e67a9aa320a59c28862f": "0b9c8fae669cd4f86bc317e53439d59f",
".git/objects/5c/e765a45446f51f5175187fc6f5e3755f38be80": "3d2d816f3d0f6f8ffd43081e2f7dda23",
".git/objects/5e/7184d3b01e03b0300221b479448023a7060f66": "3721e75613cdeb9fd70fa8ef4611a13d",
".git/objects/5f/57a277c11ae3f9104f011a76fd828d70f13a11": "50d08c5445581c213e81e07b7b53e7bb",
".git/objects/62/514a8077a4f6440aad1bb29a508faa2edef4ff": "d23704bc16bb0e72d38215f06a02ff6f",
".git/objects/62/93b5019ced07f49e05d9850e18a31cbaf3521e": "3b79b518bcfa2c7169cab8fc94aaa919",
".git/objects/63/fd398ed2581f7cb35c6d0c0a2ae143e779ef84": "d39c6379fdd7e2f3eddc5adc4ab68eeb",
".git/objects/64/18b54b4cc51c5b9df95cfa6ca3e9b43ed67a6e": "10bf9b3711e054576bb97318ddd2d675",
".git/objects/66/11501f6871fdf910d42495db199b95318976e4": "0b726d02e5b5add34e1015def411d33a",
".git/objects/67/79b78f8fb5039b88e3e23530afd0e848dadfca": "db4e7a14633737e2018f714878de5d03",
".git/objects/68/3d0a3e71d485a42c42ad3d5c4c129180703747": "9980a464e00169d4d05ebdec7a4e547f",
".git/objects/69/0a8d279821fb558a950ac185222c53aa85d0ad": "db5e132c693aa21e070f90b75d3ae756",
".git/objects/69/504f30a858892f24eabbc38c1cf2ad6cdaa2c9": "df2e5fa231585e7f224c16e2482ac9f6",
".git/objects/69/9248e07a9cf75c4e364cfa584be1d8cd1a7f9f": "e86c96f1fda23f481c85db4df0e89c90",
".git/objects/6b/77c5d914c5403f9b339711302bd0cf8d1fc51f": "39bc99c2462735ef472f2e778ef0d213",
".git/objects/6c/7c795d95a55f38836d41f760d0001b60deaa62": "6bd3b4c0d14657dc3df462c0ed97d60f",
".git/objects/6e/3d23f9b0785d14e9fbf423e10a124a8dd4cd7d": "4f8ed7dd4061e9cca71e11861fe27ece",
".git/objects/6f/ecadd338664baf4628a8da0cecd6963bde29a0": "876f919357412560bb43fa2a19c8aa15",
".git/objects/71/0cffd3faf5ff08232e9dfc45811853014744ee": "ed67673c62af0ee8a718a8bf40df88e8",
".git/objects/71/f25e9aa31a3378781cf946c7f0c34ba672c0ed": "ab510b4487fa19def6cbde61b1689617",
".git/objects/72/1b5dfa0dd5982047bc695eda1c52a778ef86eb": "596c77ff00e333018ab1a73b03fe8b2c",
".git/objects/76/2925be27b1573a5a25521c660e9cbfd78d6945": "5ef5dab22c7bab72cb076d0466bf8bf2",
".git/objects/77/c44a5b130a56362a008d1d91b01c752cbaf87b": "5f24aa6199053aa56adf127b2feabe99",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/7a/0cae00185b8ef89a69b1f322fd93a8eff4aaec": "370fc4786f955789ecd4cd854b69ebf2",
".git/objects/7a/2d3e3a5e98186ee18ad640c7b645eae0ef8444": "c9235dbb1bb2558ab6ccf32464fe731c",
".git/objects/7c/7ba7070a2abae73056d3c16f292628971e382b": "0f89a00cf0edf2cb232c8b66bbb93cd3",
".git/objects/7c/e75bf1ad7b963597231dc6a1876ccbd0a1962c": "a6672b46ffa0be1aaec0db3ae05f924c",
".git/objects/7d/cd6c0a72eeb542995afb3e1e2e9f2083d75eee": "43119f2ebedd64fac6bfc66423b5ef3a",
".git/objects/7e/eb5309369f31f4e1124d5275b44a1fdc130848": "d73f093ac30737abef0eb45468b427cd",
".git/objects/82/c6de3a1def877539e617ef1c7266c1952665b8": "69b115335f6bdae2bec41d67c86c664f",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/84/775cee04fa10e407aaa5db1e0e9e3da550c9d6": "a9c16061aebd4822b541f8974a700f48",
".git/objects/84/a7af51b6865732fb7ecb7b613e6fa6fd0279ab": "51982a0ad05258e1279afb1c06a7ac73",
".git/objects/84/fa144a65e9dd625509b50eb38ab6d3653f6f4f": "b50a61827331fe4dc0aab789faa41063",
".git/objects/85/6b9b6d97d278bc8006578f513386e5f1e1742c": "13bc5787ef1fbedbf932d2b272b93aae",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9b6a8084950742b2bbd372808b2911b768445f": "e4585fba6a6474b7c883cdda2269bab3",
".git/objects/89/a34746ed7d06681b2b9e4abb8dcaafd8f59922": "01c5b166b70cd4c58a887f6549b1edb8",
".git/objects/89/af8727594845701da6e7fb689dc0c2b75f7dac": "42f74c2a2bd609ce1c0789070e67e85c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8c/05ea7c691e1c17852f9c570afcc13f6f4f8241": "dd49498ea4a2dada7e19ad9d7351cc3b",
".git/objects/8d/5a4b407e87bb27c1e01b1c7f69ead095bc94a5": "7fa8df66c58cbd29350d3f924f5794e3",
".git/objects/8e/17fec63ac557d99ca65095bf0728cecdd6609d": "0e9ed955c5a7514cf952452629a1e7c9",
".git/objects/93/50292e0787269c490362f8127126897c1669a7": "e91c401783401d2e291f70d75b65fd89",
".git/objects/93/a860402bd20581e4316c44300746685a6dda84": "f507149edb2c1c5b185a5616e899cc6b",
".git/objects/93/aa9ad0bf3bf6158b80f083674cfa5c97b9a35e": "e96d3fcd3c1cb3fd441834464f292f63",
".git/objects/94/81e6633ddda418d92733e155c8dde45b6a8148": "06c4fd90d998fe08aaec6b91335b10d1",
".git/objects/94/e8f2587b951d5ea5f4e7ec67d0b3983e7ec916": "861398762542223ba831b263266cacc6",
".git/objects/95/4fb1d5139e3b468aae95bd49b717324c10a276": "4f0ea1e6fd6ac773b6b0a3c08c272ae2",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9f/60d46438108e7d3bdf895d0aa04e0d9699ed20": "fafef661601f7032855ba950100e5fea",
".git/objects/a3/1437b855d4773c9f26cb2859736626c1fb51b8": "b6185b2f87d5e776bdf2fce2327cc3a0",
".git/objects/a4/1fe208cfdb7982d1328602b51ec71fd767b7cf": "35ee9d23b98437bc1008f58972f7d610",
".git/objects/a7/6198ce618c7d6f0c1171e3d3038c72c661cf6f": "4926d0e7e332a9b4ec9a1acb0df374bd",
".git/objects/a7/6f788733ae7d178f2e629b7ed71a3bfe7e48f9": "be5bea7af58b9f6d46dad9cf2c3e01c2",
".git/objects/a7/ef28a5ebd8d7db5dde40e36a863c148d80da45": "809d89b99fbe3b5045d882376b3ef7ae",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ad/145a5ac765fa032ba9ecfe9ed860054e348f5c": "a6fc65bbda553c428528ea84db662c96",
".git/objects/ad/195fb27a6a6c27828d8c1605b60b06a448446f": "a77ee442d95af619fe48640179dda3ac",
".git/objects/ad/99d4aec871dd00a3adb4acd7c9cc67b9b7b5b2": "2595d9462d28f5f1aab32f0bdf68292f",
".git/objects/ae/7228c4d6eaab5f429488b9b02350d27f508ab3": "579667ef0b62b440986fd7e26ec1f279",
".git/objects/af/b5cfb6611473ba416894475e84a0bd4e7e82e0": "ecad7042dea94e91bd741a349e8f3f96",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/4f1d70c5a35531ac38e5975c181a68036221f9": "e65b1b4dc89bc12a7b2cfacc60716e81",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/77b30395a1ad673a3fb3bd763b690e99a26a98": "0bec4f84f2b718f58058e4b87f1b469e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/eaba1ee8760a98e9b17ef93cd987fb487393e1": "d86ad283b57c5f894b6c40ee4e09d138",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/87cb6c0bf0071cf0364137f51a59bc770a2dde": "4fced0a695d91eec3263f8892bc044f7",
".git/objects/bd/5919de19ddaeb3642ad4d83d9f6641bfd76b1b": "4808b303613ed61f686d1fe9bede1929",
".git/objects/bf/5011ef3763f27e409eca03774b0efb2e36304b": "79dea029f0548363b9f2f2cbcc0bae12",
".git/objects/c1/7fbb2fc7f23c9d9cafcf2e447e54ee57fd361e": "013934eb01cd241acf5f0b42ed8f29eb",
".git/objects/c2/e12571c0d442e5c659eb5f17af228f46b905d2": "d7df7f80cdfba132bdef8936a2716b83",
".git/objects/c8/29fb281ff9cfa95d15b6d972968a82cfaae580": "c31c15bf466bcab2cf98786ce8360cd8",
".git/objects/ca/017d53777056f8b7d1756db1de72884960b544": "747521de6ea4077cfd1dacfd4cbfcc43",
".git/objects/cb/90f26665c7f710248e1fb18be833099930bb9f": "2b4e72b423c4a2af93b9da74852df576",
".git/objects/cc/00b0f4331448b06e4d5a1e6cb15bbc75096b63": "3fafe5e7793b9d3e9e8ef909e96c67fd",
".git/objects/d0/d2fbda1d8408882b86c4814be9b10fa1f2ae94": "599483934f52425af02d94fc2deb5e1c",
".git/objects/d0/d6ce281c46d1d9e73ffd0bbe31129e603f48a6": "bc27ddca3735fe95f136370c804084f5",
".git/objects/d1/136d09d2dd26af23417a9b477455ae5d079ad2": "9cc765550977d6e2466e107db945ebfd",
".git/objects/d1/f8a882ff70d465285bea7c6a2a231392275c99": "818186733c906df1bf5c759ce5ef4ebb",
".git/objects/d2/3551751b29e2ea4c62ec6a1f33f426990f1d75": "d91457be08ad504bec78c00a9ea1a303",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/fa321fb19ec5f6676127b05e5eb326cc83fae2": "239835751b8cf88137d0c1dc0f55f80f",
".git/objects/d5/06010fb5417a54d09fa9b7710e3f2d5e7fc610": "539a6adde360cfced20533d1b05635f5",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d5/f99527cfd9b2c1b14202873fe48cea9179b95b": "b9c1e89fe0693a99050e85628ad23728",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/1b90487039c0cf367a95f4e5b61e26a6fcd76f": "eca9932af5f7b9c6e75156978e7faa75",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/a141a466e2f6ae5f8a62f56e99c24a61a77df7": "32122934fc7f61f3dc355757f842a86b",
".git/objects/d7/aa97b51a625f4dacd389ae90e147353e09f4e0": "089384a4e63637808d84aaeb54a670b6",
".git/objects/d8/dd279d19814cb8487794e0824e5729ed38257d": "c283b502db09f9e81949d517a696bddb",
".git/objects/da/425b851c1e28203b7d846356a0c7a0ff44badf": "3f0029c641930a83f1e49eea60a15466",
".git/objects/da/9d8cea2657e128ddf6c8da1f7ac86daa464590": "212ef29cdf8ea8ea49eeb4abae40e1bd",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/db/f259394a0a124d873c953697d764d334585ecf": "4ab1f73c2cc76dad39eec2a14b8b2347",
".git/objects/dc/11390ad0d6f79048d13ddf9d23a83aa6c98d4c": "59db5241933999a42d045a7cb43d3ee0",
".git/objects/dc/d8db8ad840082e1572c045897e6d641501e76b": "f451d882b3fdeee7bde921a99db3da25",
".git/objects/dd/86831654fc5f006228e47b96223ebbe6790590": "ed4ba72735ae9640f3fffc538fe76e19",
".git/objects/dd/b3453caca5832d77585248910134694f1d57d3": "236a4f23e6a517907f2cea87c2944c1d",
".git/objects/de/6546b6234bf393940384c1f280e21082655c5b": "8dfff26a755079a1477b99be7d0eb91c",
".git/objects/de/7841b8d2021133d4bb78cdadf4c563e6bb4574": "6902696f611e61ae1795d3fa317d0d6e",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/436363815d5fd196ee0bc0f578e03e31c0be8a": "0c4973150ebaa62f079976a9d176fb1e",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e1/109402c0ce3c3e1b67cb52759d98dcbec77900": "667f133fd4a982bd1a37d82b9ac04a99",
".git/objects/e1/f93a04f53548491b7b7ae9b1e4ade0c5df4182": "06a569f6a04937a90b729bae876ce9af",
".git/objects/e3/570ea2081beb9eb6b8cde98c5a593169e02726": "742ffa4c5146783e4b78e6d7e42b8897",
".git/objects/e4/a4ff14e120732cfa9d6fe4118ba009594f3eb5": "a27e982a0ed249da31132e97ee889b08",
".git/objects/e5/ebb146be96e50d7526fb5a139b8b07d23c06ed": "6f158e52f0d4412b653593f315282b77",
".git/objects/e6/81516a385c936d99c2e00e879e77cd855376eb": "c97c02e881aa8ebaf2475d671c84e0fd",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/0118ceab952ce70dfc20056b58a6c4e76d4046": "fb98e2f05444456790733be5621e7296",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/cb98ca8ebd262707a91edc38836c4cc165dd38": "2e56292f5a46bda7ec0c30c099dd1cef",
".git/objects/ec/4854291cc3161ef8c69e02aa1cf0eda6d0a9a9": "16dc7ee563fef380bc8c8ecec55b4a46",
".git/objects/ed/6e53976b948107826d1ab4fdb2d2fc40bc676f": "8163615d251a649ce30c9ec5b8b2bf79",
".git/objects/ee/2373b7297e869c427972feb5df9cabf1dd2789": "eb34bfa6c136244ddd7a61d192e69bc5",
".git/objects/ef/b8a2a86fcdcc0ad37b61421d2e700bf9659fe3": "7fb1b62bfff0da047ad78e964ac220ca",
".git/objects/f0/2d14097935000585ec4fbe31cc47c4aed072a6": "1b7457c2b61784a4c179d1066f8364ef",
".git/objects/f2/c939041b9b0db6ec53cb09e3b5e0a4f9aa8a63": "848a4a60baee318c02c5bc5dabe72118",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/f5/c92f5595b50622b28c57b6f7cc3fc289267da9": "35d6e251e2662de3841773ddc774f84f",
".git/objects/f5/e0e21f661bfb737caeaf1d34e7aaee4f8d8d4a": "17f12b22ee830ab156594f5a3d1b4f83",
".git/objects/f6/135c7ef9dc22209cb718ae14ac8af5cb08619f": "43ab55aad23747fbdbf4ec3395ea0489",
".git/objects/f6/9ef4055694426385600689550097ec7a38d869": "9015f8ba21cd44682810478f58af950c",
".git/objects/f7/2b73ffcc10954635f9de17040cb076bbe0f2f7": "b44ce015b409a233be713aa5627da837",
".git/objects/f8/2d94413077dac27610b7e4c611792fba441da5": "a2532ed5daea6eee5d480158516eb0f6",
".git/objects/f8/a511859d6b86713c75fb1279531d8de658e685": "c31f25663fe8ba64106b4e0fe0eb0b34",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fb/3f5886b4f503291995d7550f2538b38f36d8db": "286cf871371af4d30d8981f0c1866502",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/59cfd6cd9f46b1e4810e55f55f694113f26108": "53beb1137e27d33fe82f205cd251d88b",
".git/objects/fd/9439120de5803458add5246103a368d3fae565": "7678e73c4c4a0c09f5a04368a2c5c8a9",
".git/objects/fe/3e1c498d9e09be686bd483f97ad513954e5520": "d9a84ba62020c87c08f46f756c55fcec",
".git/refs/heads/main": "587bfbd6a912f3136c429cb4f6c604cf",
".git/refs/remotes/origin/main": "587bfbd6a912f3136c429cb4f6c604cf",
"assets/asset/images/gejserbarlogo.jpg": "6ea1064444e3a593b821948d75333cb5",
"assets/asset/images/goldplateblackbgwithtextnobackground.png": "b2b9793bc029a4551bdc6c8a1b0b5109",
"assets/asset/images/wood.png": "c297689622d4f34b97ba621f7d4cfcc1",
"assets/AssetManifest.bin": "898a3896c030708d1980cf6a80eb3031",
"assets/AssetManifest.bin.json": "bf71a057bdeb050139910b34b1e899d7",
"assets/AssetManifest.json": "4962bd92e9c8b81138b8c173051cf5d2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "8b2de01f4e28e8fdde6d51ae3b250440",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "50f298c7e2054519511159e7ee8a5ed0",
"/": "50f298c7e2054519511159e7ee8a5ed0",
"main.dart.js": "afc5ce5c74a914a848ac6cf55d1bea5a",
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
