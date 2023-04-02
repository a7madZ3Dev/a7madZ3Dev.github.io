'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8f8cf98a5e747d0e6ac9a291c9c85547",
".git/config": "c03f858131d7253b54b959d3cd59ceff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ef1e588d7381d2b1acd5b6d1c0279009",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "5461e4ad43427a2e29418a8b7f6db80a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fa45229c87e5d71f2e52c478beb828c5",
".git/logs/refs/heads/master": "fa45229c87e5d71f2e52c478beb828c5",
".git/logs/refs/remotes/origin/master": "7fb9ab1da675cdf8c446b2ff32ef0c3b",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/06/6a87fec0a31c4b1f0f1f7a78178f24251531fd": "55e4ee6a7a2911776d2f0777b4c99a3d",
".git/objects/09/92db082e0c2e995fb6a3bf23902d62147fcb82": "f1e043b0ef36cec2f5eb2128be952901",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/13/fe36519d8634e171c111ee252418090e69204d": "60c6216a96064d6cc2e2d7954b219df5",
".git/objects/14/5a9a381d04cfb0f88522f796668f3d6edda8c7": "b8af36e869cb20c94e9c987307952736",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/1a/15f50333e37b1ae19cdbd25fc7819a27d07d0c": "c0da555de78c93c0d56b2652a4335625",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/1f/b35bb7b924da0cd29725138e3101f9af0870f6": "1eb98f366ae11ee09281e727ea55e515",
".git/objects/20/1c3bd6c83763ca94f0268a295e236674348d86": "69f04e2308c2bb8f86eb37353c0a4fc4",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
".git/objects/29/80ad89da6e6e04663b28b110a993ede5ca93a4": "27330d7d1432c2e397798b52b1713ff9",
".git/objects/2b/b2bd71e5783eecb66ca33d5aeb9acab997c5db": "c0375e8d79d2d178b5341791d8df70e4",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/2f/25fe2a2e5a58fdcf18bb696c160f0b9691f9e8": "a46e81467aaeccfe5ab8f2cd6b0c2e26",
".git/objects/2f/3bda0bfa10d70945ef042fce9f1fdbf0fcc438": "0a912b8ab4ad68f3b237533422b8eb5e",
".git/objects/3a/8847c0c0dc5dcef560ff3ea90676d152fff3ac": "cfaf6edaef3a69d072882cad6d72f24d",
".git/objects/3a/b0f043ee403bce1664314a9f4fe1891bec1706": "8136beb1b09fb81926837b4629b1d110",
".git/objects/43/cac69f7850a4a04082a3ca112eafd1cd7eed3a": "d4d1eb467c4e35754d1764a9e3206080",
".git/objects/44/ccf7ab5adf6d12dbd4dddef0bd0b73aabb933d": "8df4b8d289f924512ca97ac6da30bdbc",
".git/objects/44/f7bb36690af3f47d36aac2fffd950a16ca4aab": "4008469a35819743717a88e13f59d937",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4c/dd82d3a1dda9c9bff83959b6f6d3f6b8dfb1fb": "7c4df43e065c611b1763491af17df878",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/56/a441d4c9b8db19a3fc6a189e57034911c73df2": "fb4e9f39747df9d2f109d75fe39f2bf1",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/59/358576e213791e99dbfe0fc7af4c423cee351a": "b883e225d5eaf280a36d999395c55733",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/61/56d75c2a3a7ac2f51858d51d4ee52d8a12fc67": "90799102ddcc59945aa78dfdf2ea0e4c",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/66/438368da8b0ed74c48ad4b79a495a770656c2a": "233d10ffd2a5c0ee572637a77545191f",
".git/objects/6b/c6959f749d15303431509136b7676528a50e73": "84ef0eda1df58bf5de875adebccf3aeb",
".git/objects/6d/2921e9a0d49e473889cd7e2a018cc6393f14fa": "d4dd0271b3afd00cec140d6f158d6770",
".git/objects/74/baaeacd1ea504bc1769a5c290e995841be90ac": "50ca94dcc89bed00b9567b84fb3b959e",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/d976eb11782df4388837bd6f065958e52b93a4": "3a50ea31796082ba3ff8aadd72830fab",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/86/7775eb6a9b03380dc2ea12821b3816dceddd50": "211b36197e9aa53bcac89a9aafdb0c74",
".git/objects/8e/cd4c02979ae2440f1409b5708eb6ced7a5de8c": "e90070cb13acec08a8d0a730fd8a1002",
".git/objects/8e/cda48e5f6aedbe2e39763d7f35fd20b37071d1": "d156a651cf9f9035890b3730c9790227",
".git/objects/96/433942b8af68dd39c6655272ef80d532c4e1e5": "bd874224a6c6bad518ea1ed8043443a7",
".git/objects/9a/498b8270a4ea8a1ed58a9c235c2faec21ac8bc": "1c61cd186b6162dcc14ccb6956728d13",
".git/objects/9a/6c3473b8118e2934be7e3a7654f20ddb49a1ee": "f110d4a5439eb5ba15cc7560d391648e",
".git/objects/9a/fbce9c2f54bd53217512ab9683327b36f36e28": "ee10f44731c3ed3e252a69c4a77fb35b",
".git/objects/9d/2ef77d90755b12bd975c84185934c04c2089c8": "e4148121ce0cc1b38d0a65ae06ab8dd5",
".git/objects/a0/872ee6fa7724e3d30a4d60393537a8e4898bc9": "abc13a233e70ac3eddf76ed9624e6bd5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/df86121a2501b7bd429a4c8ffa622aafe44ec4": "90605b22994af1bbc9dd77ba29b190ce",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a4/972a88d37dc987a4329bdd6bf3ab4512e957b8": "9c8862d007df4edd099ae2aeefcd4f6b",
".git/objects/a8/6a2007ac8db872b7a04a4f29620be70ca32725": "3ca9b5f73ad242165567ca56a8063d9f",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ab/d8445dfeeff747091d964d09623182d1bc4783": "3a4517fc8685032d8485e527c5803bd1",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/b9/890dd20a308d8b4c60b9ea24b5e87514b91504": "521f5188f4965174df45025b0360eb4a",
".git/objects/bb/6ec4f39ff591ccc3ff700022309a6463f08070": "06a2dbba53354df216b12ee754a4a3f2",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/70d294e1dbc9d23028219a00092b8347990a80": "86aa244ce457e42767261f10993217b4",
".git/objects/c4/b38f8e1399300346794a8758ba1b5ff47554a5": "66fe797f0a6725b73ec5e55b37442484",
".git/objects/c5/1a9b78fa427f1763446b2858f76fef36bf4b61": "de071be736881a4ec79f0b778aea3d8c",
".git/objects/c9/15fb9fb2aacaef2f73df14c3e78e44ffb3acff": "be0c9fc6f851ab441f4370c5dd8f536d",
".git/objects/cd/dc816126cec1cdf3ad5aa334bd444edb7b0a88": "c1c0b844ed13c8461e2299c9542ba590",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/cf/3813bb6193a98c4509b1a77633b6446c5a4b6b": "ebcdcc0ca90b21aee938f58f62bae0f7",
".git/objects/d3/8fa1d7b519e7d0aa35f47912dfee41c174fe19": "9ecb007a596fdbfdd211747d24a40d5c",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d6/44729efa743b24164495f9db1ac54b1f260fff": "2f826ab675300f6cca9864a8892cf065",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/f0c09ec27a9b219c46454c437a34136d7a7821": "edb2a3a562ce6e4b0c2bbdd1b4a41587",
".git/objects/db/22777a1fd24581be7749d96350268abb7ca3fb": "c40a46f266f4ba35091a6e0ca56911d4",
".git/objects/db/2a023dfd94128c444c74b2f6be393b93cfe29e": "874994509d039ab1d4952d4dd0b2e8ea",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/e1/45f4e17c74cba0aa336d871ee7a94710332fc9": "6353aee78ea9bd7b3e108e2343affc61",
".git/objects/e3/a56485907e62ab90d27ea3e992217c8b8f4cec": "25cf48a296c3febaa640962caa74d847",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/a59023ee0c985a2671a3d600933f009a1edcc7": "a3a7a8db3dbdfdfc74de3cab1165d2a0",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f3/fde6b3ddb4b09a66701af401ebbdb02f4ef8b2": "a639d6230d34c9a3bf046cc5ca28c46d",
".git/objects/fb/ecc60752acb36ffe424275d0d3254e3a403485": "ec9849a2210a43c713242d415266240c",
".git/refs/heads/master": "63ee995f46f8edb747b480f603aa54a1",
".git/refs/remotes/origin/master": "63ee995f46f8edb747b480f603aa54a1",
"assets/AssetManifest.json": "6d3e4aebaba84480a21d42c825aaf96b",
"assets/assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/instagram.svg": "1a8f805faaa9e7c0f688f273527a3163",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/cover_board.jpg": "a156450e3840709e3ff0691e25838d69",
"assets/assets/images/myImage.jpg": "373a97f82c747e78f62387a6b8e319a1",
"assets/assets/projects/BMIProject.png": "d184fb8d00716f54b95c33efb2f82c3b",
"assets/assets/projects/CovidProject.png": "40e091f960b2776a417a3afc8c720ed2",
"assets/assets/projects/FlightProject.png": "75de6051c9c8a431bd709dae8ee083d8",
"assets/assets/projects/NoteProject.png": "a6e33ed15fba8dcb4e7b36d59ddef612",
"assets/assets/projects/ToDoProject.png": "bc42c4c9a97471815c78b0ff58df1771",
"assets/assets/projects/TriviaProject.png": "d3b1a4b30d867916aa34b1ddd5e31718",
"assets/FontManifest.json": "dc637b2b926c72a5cdee879ba2e8d2c3",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "ebb6463fb7aa3f1e7857ed78a7bf3bf9",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "93eb193120bc1b8ea79dd7c0590e081b",
"icons/Icon-192.png": "35b1bdc8926830a2219f186aedd39494",
"icons/Icon-512.png": "9bf2b8c71fae51257a4be52a0cf382de",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3abcbc4581d93731a82765723a008eeb",
"/": "3abcbc4581d93731a82765723a008eeb",
"main.dart.js": "03aae8bbd92171443e07d39d9b14b2d1",
"manifest.json": "9888b1af625ed5b2ab036f9342310590",
"version.json": "cc1fa9cce5af273c0909d105387fee89"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
