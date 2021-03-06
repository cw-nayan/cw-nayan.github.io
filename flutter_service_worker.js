'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "12bb94d30b921df7401c92d990614d72",
"/": "12bb94d30b921df7401c92d990614d72",
"main.dart.js": "680270b5fd2abaea8b37bf2f48f41c5f",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7ca6cfe516909523ea51b6bf587f8198",
"buildme.sh": "96ad55549b4209ecf49e0890c4d53885",
".git/config": "cd875f95db4865ba28107eb8299765f8",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/0c/c2e3fe46f924503011586bf5b9286f9ffde166": "f8534d2cfb228305fdeac8471a53ec64",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/57/18ddfe25df7dd7a3269a236ee18690ebff44b4": "f6d4515ce151278b28671354aef73221",
".git/objects/3b/4da37064e11f0ca4631ec6653ecacecc4817a6": "e1200e359e3b07c7d0ee6f0ae60ca69f",
".git/objects/9b/4fa559f050913dcdc18064f8673e834dd919cf": "ada7ca0dcbe59a7c0ceb03e39a97a9f2",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/04/012e0dfaf6e6f9692f8251cd34cc2060a49062": "2344de466ac964aaa9578addb4a0ea55",
".git/objects/6a/812cf78661f1d25fd68682b36f2101766f4da8": "b2ffd08a0df397308854dde988d26cc1",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/a7b863de03c1b125034a618cd53d6a508eb0c9": "745e36a11f2bd1923261c8481e0af98c",
".git/objects/67/8a6ef5584eb09e6aafaca9b1fb95980dd90075": "302e3ecdf46c3f0b27e514b618adb3b8",
".git/objects/93/c9dec331b0eacca55b2e80c62a68cf598eb19a": "0b67199326bf39cfcf2dfd6b9d5a15cd",
".git/objects/93/6c7c33c352f383f18f5d15582ca8370b76ab9c": "6f7c3ff5572ff646cbda80661059f7eb",
".git/objects/94/876afd7287695cdd0057d173a742e15f73a306": "0d088c2f054cb286a7f0ddab1b3e0b8b",
".git/objects/5a/aeedbfc2fb8373147f3d0daf66d157323e13ca": "5dd573c591a81aff491d3c26b0054f5d",
".git/objects/33/bcba4d84fafa46d6600702ffaa174edf3d1ba2": "24e63f6918d61c676e7e1c36fb72ba34",
".git/objects/33/b8f30b24141be821c2c12d368d88c71c1e0c95": "69c328c6d726cda164e6f49417178d54",
".git/objects/05/bca0bd4156859b5a38f85b907a607796bd2345": "4872ac74129b8b524c5247678ff9b3c1",
".git/objects/a4/27e5e3e20d5cec2af93e9396ff52e72191789f": "1b0684e8362a4d0b01f991cf3d5b6470",
".git/objects/a3/604e4024aaa346bb57b0acaa7d62ec426007c8": "f52f4e2b35ddaa7a7edd56b7883d5c30",
".git/objects/b5/d5a46df3f57413765e96385da4bd620aaf25c9": "54b85da4eca7c511438fe5ea2a0e33c1",
".git/objects/b5/c6cfcb19f6f5494836764ed35ca0f5228eeaa0": "6a01d3d168bd8c459194a3b77d191f76",
".git/objects/d9/4bf3fda9bed3220dc895016a873ff58d89a68e": "30c439a3441c7c82bf88ac7df0468661",
".git/objects/ac/74fca9d51df1debc40e0d67766aa8f140eb334": "e0d1c3a72ab0f79d398923c71e2e1b20",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/f3/9a07ec7c8f6db25ae4686877fe1e03cfce1ff1": "97a04b436074279a58ef6450f40e36be",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f2636fd07e49643552793d5b6839e7e6768440": "7626c96251c2ad03f7c71b19b9954d20",
".git/objects/ee/d3dd6afb438f0a7f7b46c9daf787e8171bd1e1": "b0fa1202a6f7acf89701b43b6d96e532",
".git/objects/fc/cdbcc1cb440eeb4adf7c90a9721a2d85b9e7b9": "dbee4bec8f916931875eaea087f8b8de",
".git/objects/fd/4f1db731e07fefb8ed9207d545e1258cb223d4": "4ecc1480a6b873bee514b7c3b69ac120",
".git/objects/f2/d53fb938a294dda66db6157978975c70092078": "a53dd6aa60b7a9939cb764622ecfb2da",
".git/objects/ed/a8aaa8d1e73168bb2e91835fc8cd65471849f4": "14ab35191f146cc4e9a51036e2f79b57",
".git/objects/ed/dab7ea65b0a866474a3e7fd0d894a445213bc2": "edec4d4ead69a55c719a0dae05573007",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/dbb7833970767758075f761a5b97140821b943": "9c39561fc823052ab42d35aa065d12e0",
".git/objects/18/5baea2b9495dc93a5416870c6fe69e674e2160": "3eb24342d4424e8c0e201a0091d63b6c",
".git/objects/11/76635b96d0f0782ffe84532a90f61969f8283c": "0f719f8fec0fcc0728f06abc0e2078a5",
".git/objects/7d/504f84fcbba5a93f2567fd12205374c5df9798": "86a47edc1c42f949a2b30ab9f8703a8d",
".git/objects/42/35e15c4329bbe0d9d666eee9fe25e276b71bc8": "0d190d790cc5aa802d6befa0b939c8a5",
".git/objects/42/9f9660de68a5d7b9997e742924a75c72bb0261": "b08f2dc71208a432de7e893470527f18",
".git/objects/89/b43b4ab80ffe6285e4c097932ab9df4fecf8ea": "b86a4f0bd799e09aec74211e64e46eac",
".git/objects/89/5c3ae1889c138f9ee5eccce3b118be22dcf7d9": "4faa722036337195cd9186f73b53aabd",
".git/objects/87/024d6562905f129f51b2597c41a7af9d5986c7": "c78a6f670370f2ea58ae0c6d0f2e3e7b",
".git/objects/74/9a5735ed2be1d993851e11726e1c5ea8611256": "a2129ad56c8140753e034dcc44ecc775",
".git/objects/74/f798d32f9d626b8d36f17a31455ddc0ff1322f": "3c2c008c919cfd081ff68cb1342f336d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/cdf2ec84468680cf7a9d15b647fa5759ae85a5": "030d4abc333f853cee3d493836a72afc",
".git/objects/4d/055c3f0c792c1f3bb0dd15e063c040d9526e0d": "1afde958ebf9383c7888bbd38d747d5a",
".git/objects/81/9191d3e5edda4651cfe1411755651a35f49765": "803495b19c772236f4c21e98a3d8b632",
".git/objects/81/ae04c65be769bc392928366c45502153be3621": "874a8c8dbef7040107fae46c681e1abe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/182af14c008d587d6db94e842ede27e5036bff": "e8a3bc23bd81b58a67ecf83ea86b82d1",
".git/objects/6b/790cf85b3d554bdb3ecfa00e447e8e97501b4f": "f465b87e9150ef788074fd954fad151a",
".git/objects/07/c8a980896d3823fd1b5ebf699d856970a943c6": "c2f9f482723f291a3582ccd39a7e6245",
".git/objects/07/0790a4a842c89920fec455831f1b97bf6118e6": "97511fe4a65b776af44e7103435d9bc8",
".git/objects/6e/ed55e8af5a1c2217567d2081124cb0af09c55d": "e6146f418c9446b58909b81697c19baa",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/5c/e69bed2c7174c2184087115bd1774fae9cb632": "aab7cc2f98946dbb9fad5d9824189cc8",
".git/objects/5d/a8772ace86e5e472c812eb2f4bd843b8d812d4": "1aa447dc4f11d5c55c654d61454865a7",
".git/objects/5d/ebdad4c40db1fe00251ed542cf4e3c7a5b3327": "780c1c2326dad1aa83863d280752d86d",
".git/objects/91/ef47dbf0c18ae843040bb94e6112daad48219d": "012742ca0277e74cb7316db9e20e7343",
".git/objects/91/3c86f2b7e50b9821a889c1bd53d7484e976418": "82784b6dde37296322f3145ff484d64e",
".git/objects/3a/2d99095e0f4bf6550f9ab7a64b2be00d634d22": "08f23565b8a4dc462b6db7d316a58c2d",
".git/objects/54/057536fb5f97d4a982c8c3703eef2fe571a34c": "0ac671baffc7765b0dfd3acd537a7c7c",
".git/objects/3f/f3d81b39cddf0fe59c9510ba3ad1cbffc1db1d": "1ab040603bb232c46857d7f2945adc61",
".git/objects/3f/d4b80954b271e321c2f2b7d701bfed42763010": "d3ffb21060939bf5bb40c531bd13371d",
".git/objects/08/31b89942793816f038ea574370084bcd70fc05": "318b8978ef849f8a1c495f42dee1a25c",
".git/objects/39/066d8ecedf467660996c2fa58b4c6cf14e8586": "0e08c249ee7e978b44c3dd4b65de9313",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/63/572e6578e715889b5f625458786a892acc91d0": "c6bc0677f0f3f2262e755b7cad86d7f8",
".git/objects/64/da791bcadd2143dcefd39cf204f6312a31b062": "6573afc567b6e7bbef2ea780ac10ec16",
".git/objects/64/4904e81e47f4b8cffb7281214fcd2c9a11952a": "9f92f2061483305d57fe2e10c7b486a0",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/90/2c0c2f3dc225283ef09e01baff8b293f642dd2": "cf46549a6c91ba6ab4d93781c2b823bc",
".git/objects/bf/68c10282df787c5cab8b02095d6a959cb496c0": "3cc42525ef8268ef247d4eabed104451",
".git/objects/ba/bcbf9bdda287b93f2762a3b755a72738c6dd58": "7dfbe6a9a90afea67494c5abfc21b296",
".git/objects/b8/ef927027691d1f9bb66ee6c1727763bf80bb60": "33de1a8e63b40ec23b5d9a1efbbe7c30",
".git/objects/b1/92416dab618d4566a868dd1846866127eba6aa": "47e54b53f4b1b5072a32165d557e0f22",
".git/objects/b1/c7db98c16987185dab791a22b2ecc8ff9efb7f": "0e5a389c65c0e354b5af3efc2f29d71b",
".git/objects/dc/c2cc4ec95b7e5dd6a93d45d4523214780c768e": "7102e3317a5634120407349c3fb194ee",
".git/objects/b6/6ed2ac727d82ddb5c3fe1f322c778fb29675be": "0a190d768d39307dad20b5a0e1f14477",
".git/objects/a9/a62628b8984b666c6a7dd5536a8d2f4969d525": "25264076aa0a59c103a35abd4bb90510",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/b7/7b156505e2cd93f14c79137ada76da5224b2d9": "06b139ca70737b46397f5aa0ff77710f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e1a4eb1f0d3afa1640ec38b8ae371304099f11": "de1d2a184a989303b5ea8f2c2f23a64f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/e1/52e6dcc8ab046c79cb8211adca07ba2e9fa04c": "21a259fe3c7d0769798b726a93d8244b",
".git/objects/e1/27fcd7490bd92e5e25eb6e607131612305f014": "ef2cea427089a68db337fb31e9571b38",
".git/objects/e6/daf2f1767b05f816f087d280f75767afa259a9": "4023be0727ca2c687d6fe40fe6cf020b",
".git/objects/f9/0ce80c77cd98cd0075ab15d85d94ed7a0e100d": "d1f6f012286e321d8f29d447ea0fc64f",
".git/objects/f7/12f057128d28082ce080e6a39900a43b95a3bb": "07c25fc72970202cee0a9b0384b782a6",
".git/objects/e8/008d7f44e5800ed980ecee456e9e4190f56600": "265990ed786aadf4ec470e340f55b5ec",
".git/objects/fa/f81692ef7759f51560a99dfeb2d6a10228586d": "42bec74b8472472620117a0891892fef",
".git/objects/ff/2a2ac2c23325c3c4f94c976acdee147c14ea23": "5ca11589c5a5ca7b7304a79da63fc96f",
".git/objects/f6/ecedbf990b6ae0fdb053de619b49160213d55c": "e929872f4967b0b40af5488e6fcb6793",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/1392b88a4e2f72cad3668b2fc220af395327f1": "0d51c9b49a5a2d0518450b5a94b03350",
".git/objects/f1/0ce389210de7cc08953d9026a11e94e7183684": "84c50504f8ec2b9e700fef73ef13034c",
".git/objects/cb/f7802e249753bafaaa9898b7ee97c7f2ee3fdf": "0ab830ceccbe30095ab274c517b55f4f",
".git/objects/cb/6f47ac75162b112c97fa7451bbd3db939bc9da": "ee8703156dbca1127c168f7ec53038e7",
".git/objects/e0/f06878d361c2492127878ca7f5dad32e4c6aaa": "6400d1ef5cfcbde748e3825e9b524b0c",
".git/objects/2c/e5ddece9abfa079a076cf9bd6c907707d2b3fa": "6d1c045273d6b90693deb859402ec088",
".git/objects/79/4d47fc89f3b4be02e3b65a5e33a9bcbf035d25": "f0d16273e3c89492cd445db27468b0a9",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/41/49cec4ef7e4db75341e8507730e8943d913930": "b7a5ad9e0c3bdfc09f83306e2fcad5e0",
".git/objects/48/ac028407e082b58c0c9eae0b6d89ef99435435": "bc7fd89842dd0d3b79b2eccb3a5db411",
".git/objects/70/1de30a1f8dd4c3ef5e418f13be7ecac0b6d1a7": "d22e89789996fb723735716f3fe485e7",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/434adb15695e1043348cc44fc09e975a63a412": "a66549e2201c988aa93cc9565176ef4b",
".git/objects/4f/4386a917dab0b5c5276053d9f4db2ada9867b6": "047a76c0ce740cf7192503f943956585",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8c/dab37fe36cdd1f90fecedaad83189cce91d360": "fe409d604f5e7bf4f7bc51208824d102",
".git/objects/71/4d75e1ded6cb6325680adbc867a71cd3cc3a2f": "7e9328267013c28dfa2045fedeb4bb17",
".git/objects/76/f3f1a339c3dc7a0565fb5aa9ea03c8349a1c6d": "efd4565dd20f65cc5b7a752893502823",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/49/1d1a63792937515b99b35b3cef7e740957d950": "67acf11aeb8a0666bae6929e9bc264e8",
".git/objects/2e/240c27d53423c5e8ebe3fa4a7bd89777b0f8e3": "570d7df9370ffba777301f431af940e4",
".git/objects/78/795e6adccf3ee0b6c90868377cd0b509577085": "6cd93b4d655b96bc36897ebc382d9921",
".git/objects/13/838769999d02e0eabe3d0cfdce904d61a4f41d": "a67168794f821c0863b3fb381bdea2b9",
".git/objects/14/ad0be60a7f1cca234a3d3e7de2633edd6f698c": "b241f0f8f528f242709166b3b975b542",
".git/objects/25/03b211cffaeac7dff03d18ae89a4a231fcfdc1": "5ee3f7f255ad020fc69f31c78dda2df0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cc7b6824751645dd60ca2ed54224be10",
".git/logs/refs/heads/master": "cc7b6824751645dd60ca2ed54224be10",
".git/logs/refs/remotes/origin/master": "cd344a41aa867648da93964c7de7c39c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "93f20d46a6da494f3235bf3bf9c633d7",
".git/refs/remotes/origin/master": "93f20d46a6da494f3235bf3bf9c633d7",
".git/index": "226dbdcd026487171e1fcd9552881532",
".git/COMMIT_EDITMSG": "bdf84c60843291d85c77eab3d15598f1",
"assets/AssetManifest.json": "91b9e89c237bdbf6f6bffa240897a1c9",
"assets/NOTICES": "4f286a2ef4c50e977727ed30d9041a40",
"assets/FontManifest.json": "194074479a8dde87c81367887249d972",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/docker.png": "a8670571a818bc9bf7c1329247d2d769",
"assets/assets/flutter.png": "25945cf1d0cf7d508e02cb8c00eaeda6",
"assets/assets/grpc.png": "34baa4c23cc14d00ca39d09ff9630fec",
"assets/assets/nayan_black.webp": "8c321ec3ef9e31cbb71b64f1131cee54",
"assets/assets/android.png": "9caeb6c0b8666d14c6847dfc79f49546",
"assets/assets/mongo.png": "c5446f53ede94c1d23d1a5eb1fe63d01",
"assets/assets/nayan_color.webp": "92d778a0af21465c097509de64e7e790",
"assets/assets/golang.png": "152e164ac942752cd1db1fdfbfd814b8",
"assets/assets/cnfc.png": "164af25a4a22f66b298a8cdd204be595",
"assets/assets/k8s.png": "a74dda61fc3e51cfe822e69ef8bbe4b2",
"assets/assets/nats.png": "82c47008fb6230fedbe8c9c4d04b8237",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
