'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "596e03d443951c3a620d3a1bb6cb716a",
"/": "596e03d443951c3a620d3a1bb6cb716a",
"main.dart.js": "e26ab3c8c7eb9bf15b83fe6d733188a9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7ca6cfe516909523ea51b6bf587f8198",
".git/config": "cd875f95db4865ba28107eb8299765f8",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/3b/4da37064e11f0ca4631ec6653ecacecc4817a6": "e1200e359e3b07c7d0ee6f0ae60ca69f",
".git/objects/9b/4fa559f050913dcdc18064f8673e834dd919cf": "ada7ca0dcbe59a7c0ceb03e39a97a9f2",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/b5/c6cfcb19f6f5494836764ed35ca0f5228eeaa0": "6a01d3d168bd8c459194a3b77d191f76",
".git/objects/ac/74fca9d51df1debc40e0d67766aa8f140eb334": "e0d1c3a72ab0f79d398923c71e2e1b20",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/f3/9a07ec7c8f6db25ae4686877fe1e03cfce1ff1": "97a04b436074279a58ef6450f40e36be",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f2636fd07e49643552793d5b6839e7e6768440": "7626c96251c2ad03f7c71b19b9954d20",
".git/objects/fc/cdbcc1cb440eeb4adf7c90a9721a2d85b9e7b9": "dbee4bec8f916931875eaea087f8b8de",
".git/objects/f2/d53fb938a294dda66db6157978975c70092078": "a53dd6aa60b7a9939cb764622ecfb2da",
".git/objects/ed/dab7ea65b0a866474a3e7fd0d894a445213bc2": "edec4d4ead69a55c719a0dae05573007",
".git/objects/11/76635b96d0f0782ffe84532a90f61969f8283c": "0f719f8fec0fcc0728f06abc0e2078a5",
".git/objects/89/b43b4ab80ffe6285e4c097932ab9df4fecf8ea": "b86a4f0bd799e09aec74211e64e46eac",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/055c3f0c792c1f3bb0dd15e063c040d9526e0d": "1afde958ebf9383c7888bbd38d747d5a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/790cf85b3d554bdb3ecfa00e447e8e97501b4f": "f465b87e9150ef788074fd954fad151a",
".git/objects/07/c8a980896d3823fd1b5ebf699d856970a943c6": "c2f9f482723f291a3582ccd39a7e6245",
".git/objects/6e/ed55e8af5a1c2217567d2081124cb0af09c55d": "e6146f418c9446b58909b81697c19baa",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/5d/a8772ace86e5e472c812eb2f4bd843b8d812d4": "1aa447dc4f11d5c55c654d61454865a7",
".git/objects/91/ef47dbf0c18ae843040bb94e6112daad48219d": "012742ca0277e74cb7316db9e20e7343",
".git/objects/39/066d8ecedf467660996c2fa58b4c6cf14e8586": "0e08c249ee7e978b44c3dd4b65de9313",
".git/objects/63/572e6578e715889b5f625458786a892acc91d0": "c6bc0677f0f3f2262e755b7cad86d7f8",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/90/2c0c2f3dc225283ef09e01baff8b293f642dd2": "cf46549a6c91ba6ab4d93781c2b823bc",
".git/objects/ba/bcbf9bdda287b93f2762a3b755a72738c6dd58": "7dfbe6a9a90afea67494c5abfc21b296",
".git/objects/b8/ef927027691d1f9bb66ee6c1727763bf80bb60": "33de1a8e63b40ec23b5d9a1efbbe7c30",
".git/objects/b1/92416dab618d4566a868dd1846866127eba6aa": "47e54b53f4b1b5072a32165d557e0f22",
".git/objects/b1/c7db98c16987185dab791a22b2ecc8ff9efb7f": "0e5a389c65c0e354b5af3efc2f29d71b",
".git/objects/dc/c2cc4ec95b7e5dd6a93d45d4523214780c768e": "7102e3317a5634120407349c3fb194ee",
".git/objects/b6/6ed2ac727d82ddb5c3fe1f322c778fb29675be": "0a190d768d39307dad20b5a0e1f14477",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/52e6dcc8ab046c79cb8211adca07ba2e9fa04c": "21a259fe3c7d0769798b726a93d8244b",
".git/objects/e6/daf2f1767b05f816f087d280f75767afa259a9": "4023be0727ca2c687d6fe40fe6cf020b",
".git/objects/f7/12f057128d28082ce080e6a39900a43b95a3bb": "07c25fc72970202cee0a9b0384b782a6",
".git/objects/f6/ecedbf990b6ae0fdb053de619b49160213d55c": "e929872f4967b0b40af5488e6fcb6793",
".git/objects/cb/f7802e249753bafaaa9898b7ee97c7f2ee3fdf": "0ab830ceccbe30095ab274c517b55f4f",
".git/objects/cb/6f47ac75162b112c97fa7451bbd3db939bc9da": "ee8703156dbca1127c168f7ec53038e7",
".git/objects/41/49cec4ef7e4db75341e8507730e8943d913930": "b7a5ad9e0c3bdfc09f83306e2fcad5e0",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/13/838769999d02e0eabe3d0cfdce904d61a4f41d": "a67168794f821c0863b3fb381bdea2b9",
".git/objects/14/ad0be60a7f1cca234a3d3e7de2633edd6f698c": "b241f0f8f528f242709166b3b975b542",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c400cb641b4c2a055c1e779bf0816d24",
".git/logs/refs/heads/master": "c400cb641b4c2a055c1e779bf0816d24",
".git/logs/refs/remotes/origin/master": "8a745e8d2828f322995c777917a1bd24",
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
".git/refs/heads/master": "65fea0526692ae987a9eaa3e24e22ce4",
".git/refs/remotes/origin/master": "65fea0526692ae987a9eaa3e24e22ce4",
".git/index": "05697dbc64fa9bfe8ab26cdfd7df6166",
".git/COMMIT_EDITMSG": "04fa9471916dcdeb1ce7b015744580c6",
"assets/AssetManifest.json": "91b9e89c237bdbf6f6bffa240897a1c9",
"assets/NOTICES": "f08a6b1cc6fd4ebfa28dbaceeb24ed83",
"assets/FontManifest.json": "194074479a8dde87c81367887249d972",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
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
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
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
