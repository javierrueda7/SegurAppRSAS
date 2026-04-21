'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "00c9af2e13bfbec2997ed96ae26dc5d4",
".git/config": "205e94f8bafdaff73448bc770141e7ba",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f619c39dd4382561f514bf3ae5ccfc43",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "54c2d881442470f062b2c2a44aae6fc4",
".git/logs/refs/heads/main": "30c615f92cdff15a1090778fd21276a5",
".git/logs/refs/remotes/web/main": "21b7c707b5cd74a488dfb2254c27a5a0",
".git/objects/03/d8b7b87349aa5f45cdc80b4dd649f63afc126c": "5eb9f9f6b914f3b0020367c589b27951",
".git/objects/04/a2490e75cc4a2cf5abc7ba0faae6a15aaf0389": "e4b8d2e55a54d1a2c7e38ed6c7cb7ba1",
".git/objects/06/8167a30e96c70eb100265def15f53bcd2301a2": "2e71e1c83fcdf3359adf17a21e098d8d",
".git/objects/07/0123cdcde35ae1beeaf8a64127c7e2cda7c0cb": "20911a08274c5f863731012244cdb7e4",
".git/objects/07/1fec2b0b8c64526e9ac71fea33a3f07dda7d46": "4d6d34e4e57f57f556c0db45f34bf667",
".git/objects/07/6c9045103c60750f634c7bdc55dcd18f66d4de": "442dad1daa62110c4722fc1491d948d6",
".git/objects/07/e2204d846c63626aea59e1423765c32ebab88e": "cf26d9646fd43849ef786719fa021876",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/619466dc2772fb96ec30b9c16260dbb482bda5": "62d04654708a161eb60aa0be7e2ecba3",
".git/objects/0a/721b947e25a515b9919863a64635d4d610414d": "2c48795d5099fcd9fec9051b15d0f351",
".git/objects/0c/fce9bf1548172d9dd121abd86c51666dbee73d": "a5f5a8b5f0585ab15f6d9a8c602f1b0b",
".git/objects/0e/7c040cf4409fd5181e55d81e803cea84844986": "ae1be981d29b4da82fc8b990fdd282e7",
".git/objects/0e/d25776aa007f52835d05d13b7e1a87bc7c7319": "17fd7ec1929e6758c68d8b117ad15f77",
".git/objects/0e/f3703509cc237c1b190867e30e457f162dd7ea": "0157193009ade5cdbbc11693c512e678",
".git/objects/11/449ca7df9401e98f1c4ceb16dddc6f4866bab1": "11ba686d2dbee84c2a4ae5347cb683cd",
".git/objects/12/361d5107be681c3983fb6f31994a47bd6bab1a": "6b323f63343325478e728c6b794fa985",
".git/objects/13/009ace6e2d3087856be041260151fca81963c0": "f05c720e76a30ba4f229532615810bd9",
".git/objects/14/74909878a46cb0afe678a3b2499e8acd398ff0": "97a3d98e9d22403b6d7965de31d540f7",
".git/objects/17/a324f9ed4a43b8c0e40c13287a706fcc71d8ff": "cccc0b9da9207f80fbbf9e8be699efc0",
".git/objects/18/e68c265a3b51de82ab6d574a39d45863b1648f": "5796ff0f775f08fa631ca822fffec8e1",
".git/objects/1a/23ebeb6b87f73068c18e820bc130f3aeded581": "6c54566d247be3121344aba5eba105ec",
".git/objects/1c/02f0968fc79ae732d094ea63b1f6086d2936a5": "536cb08f69b4415a53495f9518f76742",
".git/objects/1c/3cdb46c4b1f1b221b8ecdf2cc1deefb272fa0e": "7cf7ea2139fb6bd989fe086643514925",
".git/objects/1e/8663119eb31e464206b9cb4b40daae81f94ece": "66c785684b6429657544f4ba84cd3fa7",
".git/objects/1f/2363fbd6bd365b2615759300ec40930307b4ab": "517ae82b29dc0b5c815b46b4e3923d53",
".git/objects/1f/27525e3992906072938305b98ba2954e3068a0": "7e8174254b7887a14fa21a2cfb75f8d6",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/a3345dc7c6bb963d53cf2589d55f74c8fe70df": "2bc7649d6398fa1a4de0470ad4f87f58",
".git/objects/23/eedd76ac1e4055f5e2aea59d70dfa0e647941c": "1743bedd56851738e86185ec5349275a",
".git/objects/24/dbc7fbe8540cfa5b5487e13c441f1a775abae8": "f704a54ebfc2afcaef0fc358b48350d0",
".git/objects/25/006ec3959c5cada53fc3d65d9ec44f9456b615": "40b338466e118c6cc0f1d3b50b008881",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/30/0b48b009780ca43bd625c9826e1f389ba781fe": "22c5d2baa67fe009bdd198d86d235896",
".git/objects/30/7868444155f06d085c24f208b9739de08af7cc": "4781fa1a5159503d04085defdbfcd44d",
".git/objects/31/cde7888fba3e09f748fcd6fe28f5a12173ca0b": "878bdafa7a52408617bd6b99ae45ee31",
".git/objects/32/033590be7d0679680a2a67849349d670b4f8e1": "68baa7afeafdceb6c3bf8d31d40ea367",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/abf1dffc57bd4437410636795ccf0cad309baa": "1a3e0d676b8f7ed7c2669e2fac4ff9d0",
".git/objects/34/ce7cad0482a6441398d4857c947e3b9662460f": "223f73c6fbf77e6c56d9ce94654ae67f",
".git/objects/39/3d4f9d63a0942ca3e5abddba001c9bc6a4d6c1": "e2624c1b5a811bcf314cffd8b17f7de8",
".git/objects/3a/05beb51cf2b28f40cda403358bbd79bbfcc817": "e6776843dc21e2de1842568444d906e2",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/f5d5e90e1ddca0b86a306d950c0fafd284b8d7": "310af7f5c31de76a6a816d9a813048d9",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/bf1277da06999de34ec80edb7c54bc72d5cae9": "a8f22847644dbd833815e229c7810aae",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/e55426328992d5e768a3c916a5e4aefd9a383d": "c8382078661b87baf3cd2b0aa6cc8adc",
".git/objects/4d/315af3fe52e37a49ef345ffa7fac8ad5565296": "e858a5f21dfe4b7f001f0e3e051aca09",
".git/objects/4d/5f5cd0d465362f88f9bf1bf9ea83cb7346964c": "35b542948bc4a7603882fe59a06986a2",
".git/objects/4e/b287ea303a4d1e0d4355f969018dc31e8f1988": "05866d285b49a68320ae23ce0429f2d8",
".git/objects/4f/0a3a70a16ebc78625a5727b5ff7e85546d8820": "f0bb5597a7b194cfafd8706c358da4ed",
".git/objects/52/1986799a9bc974b43ff307a2e9821e2455773f": "17957c66895e3d879bece56efb8e6401",
".git/objects/52/e788b8d77de0500ff84a74eb826ba9bc499b44": "a4731b7f1ea48065f7b1fa1dc2f65990",
".git/objects/53/ffe0c77d848e87edf4a097e18228d62d85adf7": "e9bee41ecf20ce78421ae9aad066bac5",
".git/objects/56/0efad6c4016343fc309959cb5129460fe865eb": "ca02fb647669a42dbca93905e5df2d01",
".git/objects/56/986961f6a8635a53f5f7f14a657e42646bce36": "eb6af8b8f0c367a0b9105989a86ea20b",
".git/objects/57/cc148ac6f5feb0ffe07dcaca064827d466327e": "b7059f4fb152fb3684814ad625d6bc16",
".git/objects/59/5b4aab39b4fd36b546665b1ea05eeb433d3cbf": "4360b77e89a2ef5fe4623c0b5f4cce2d",
".git/objects/59/cc65c630f0180187b481e2db41d82756d4e0ef": "753d4f8d5e18cfc9adc22e49999394b8",
".git/objects/61/79cfbef956d4a7f323d6e9f2969dd22504546c": "9490621c7f9d4aa450567891840dce2d",
".git/objects/69/9c59660a347378002466392e297666b5f094ad": "e854fbfba99b774d8e58fa38a66874af",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/0a65fca5caaf35e0ff8dc79301eb40f72ca40d": "0d7bdfa743cc939c27608a6a1d886bcf",
".git/objects/6f/cc057fa7d4cd64f23e7f9c757dfa7f9de835e4": "3a475671c0e9d84adb2c9f90f3775418",
".git/objects/70/81cfe09c751b614cad9d03f1c60678d174c8d8": "30b6b935ad49f68f482230d16aa608b1",
".git/objects/71/5ab92c959901d0e5fa362c04627cf2a8888fd1": "b5d835fc68e3fe8a61bd8a016288d8d4",
".git/objects/73/aba83d78265c55d2770fe60ccda43e04f77a90": "d2d1651e809b35316301b2b6cfbfad26",
".git/objects/74/3cf335249ac0e7c49a5d12d0b537a448646342": "cbed67eb3d7f45ca7e6c34d2ad55a418",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/d0c9849b47483bd928d2da63a42aa7fe3278be": "4fac991f0bcc19086f42e649b2e3e355",
".git/objects/8a/a9a54ecb7951a2e99151755840638662a9eeb6": "3694d5c7d77b02017bd3c5436ab80ad7",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/f536716e99811149a8956b8c9440ed1540f5f5": "b63e4affb3376d1eb64731a2c9e3fff1",
".git/objects/92/6218f316dc16cff959d5c9e04c0e68377f712e": "80a786a7dec60f128271284ef6fb7686",
".git/objects/94/17330fa00c00d7cc91b688894ba87cf25ce1af": "51c982bd8aa9cfc0f5e4a24dba616739",
".git/objects/94/618c73f9868a36ce1c26572720cee812d609ee": "9276192160642638493f9d19d251385d",
".git/objects/96/7f0f5ed6e7909e7ed1a6dcd919a8b7a9b29334": "ffa0aaeaa0c1b85f529de817498042f8",
".git/objects/96/928edd1073148d81f533bc8af19cfe745056d4": "d80becebdcc0ce7c71d7081c481b7e81",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9d/7dca82fd96c400f1e9a266755e63142fb83a59": "5ff10657f6060341426bed877b7302e2",
".git/objects/9f/8670c82db502ac09dc037ebd794a72c69c6c7a": "8086e9b0a7776e2dc07e841a40942e33",
".git/objects/a0/e9b016619aa0571f2d032d6228091797f8e26f": "034df3560c7103e0f78905b71a72cb33",
".git/objects/a7/2c57b2483164bd273711412f971cc60bff5832": "efc1f9c8ed5e5d2c50b2afb684002cc5",
".git/objects/a7/577c5e93cc2feafecb4b18cebab5cd64a3eb09": "b18a9dfff0a08c62950373ae8fc376d5",
".git/objects/a8/958ad2fc7265e2033f304645ca0115447a9e89": "6204c056be7737642f5acb3beb5aafab",
".git/objects/ab/07fd7503ec50b807c4de28de57160ea806057e": "45bf9c2289f7154299c416384943b496",
".git/objects/ad/77eda300e58cf45e003a58e59c9aba4e287ceb": "141ac7d6815d3e10b8d78fe912272590",
".git/objects/ad/de075f3e0a515474f0bfbed8a92350604dbd98": "372eb0e49c1499eac01f59efc66ec74d",
".git/objects/ae/241f1bd31c5b66b0889a27ee6d848f83fbdd35": "31b176b7ad5283b77ea80bb3a55046ae",
".git/objects/ae/e6dc350a0701a9032516c2faef2bd6749890d9": "6901d19e5a7d555bdc956a60826ae86f",
".git/objects/b1/25b2e22d0dc095e860fd6776f2be2e34ac24cb": "fd694039b5c1bba57a466ce089b422d8",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/1cedd5ffe0e0f434366f6ffa0f07eedee524fc": "c10942b1aecd11632e4b46fbeaeba9c1",
".git/objects/b5/43e49954aca74888ebdd363614bca6ad290365": "ca1adecdea1912ad11276e975f316bc1",
".git/objects/b6/b26cd5795321919984ad68fbe94b204ff7b6fb": "df046a73703094bb18fc155d8ec7a0af",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/7e12abec5863f31f5e740bc87a8457326255e7": "c1bf0e548ab8054e45f3f5f2c928d90b",
".git/objects/be/696a5d36b4cbc7502bdb33f8db75008f347b11": "f53b88d9bedad34bb9307730ac121b7c",
".git/objects/be/dba2fa19181b0f85e5fdf3ed55540dda9c449a": "09064a2c7af6ee7cac256ecc610dd1b0",
".git/objects/bf/3fb85b1249d18b4803f5eb29eada11a3cce212": "438ad1807a99ea6d64f77869c6791418",
".git/objects/c3/7bf293e8132d083adb79a3d7ef1cd5945dc409": "c9851f8afed5fae361e82628a791b76a",
".git/objects/c9/e6c099450cb6eb908950b48ae8a03f465e5e81": "314a747c016b8f241d3f9ba5ec2ac61b",
".git/objects/ca/36b665b7f2dad41586be4b8a5bd783b90bb2b3": "6e05c4f4c35253d601d9075515b73e80",
".git/objects/cb/7b491dcf81ca572417de485e369a23a68f5fc8": "7528d69846f43bf6b1d5495cf0c49e3a",
".git/objects/ce/a10e60253b6ab09bc1657bf8f46d666a34da63": "1beb3f8b50bf47cf2724a68eb9ac39c1",
".git/objects/ce/c134ccd47842984446724ebc66ceddc06bd905": "21cd5f82ebdb318dc98f7bbfaad961f7",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/06657e839eaefb72641b59ee7b663eb0a72244": "44ad15377bc1f308e44b23ccf81ce610",
".git/objects/d3/06f60ec74e3e80f8857fba240d331fae12ff16": "284e289bf4147ac9c4dc0b19350bff92",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/e34a93ae05769e36e029d73b0cc7e805279444": "33e695dbb752c92a204f92852de1612b",
".git/objects/d8/a837d79cd72834ee84e75b354363bd5fc0dcee": "8902c95e489496b0d43848c208224a54",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/81809e2a92daef9e766c8fce5d4f7f392aafca": "be3e62b4107ee19c93838b6d9c07b351",
".git/objects/dc/dd060a03daa21d2b2f69ec65e39824a2edf58b": "d28670b0551ff7a7dee625f9a42cad8b",
".git/objects/dd/75eeeab99bc1d20b1d45adc912ad852fb58c62": "2fee966ed156694c37313cc7209aab31",
".git/objects/dd/a9d5c4d62116094bfd26b0490cf7bf085f8cca": "371595650f9686642e461720332ee782",
".git/objects/de/412a04ed07d9f02ca3f3b0d46d44d4440dd4b8": "030585f1b465c66fc7d18e50ea3de919",
".git/objects/de/5c0a4be4f3a41edd3daf2978b1e0dd1d09efa6": "6b734ae870f723244e2f1aecea0f6ecf",
".git/objects/df/4ac746ea0807a2f5843ac902c92f21d6e49978": "b2804f31d5666bc1f07068d8a7ff5d5a",
".git/objects/e0/67482dcc6280cff2633cd4ac88ef8adf6f87c1": "f46fbe05501cd529fe179fe5699a3390",
".git/objects/e3/d6d41c0c3fed12e2f2bd03f6e27fddb7385014": "cec50a800f352a5518255e9043416f86",
".git/objects/e5/97aeb3d33383bced9a3c91514e61d9a4896596": "aa330b9ec6d5fca17d769a55efeb1ed8",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/454bb3815a0b1c1fa5826e4d50b8166d5c7e97": "70077fcefd71565b61e357f54699df4c",
".git/objects/ec/4779a35a3cc6a49d3434b64373963c5cabfff9": "50afa498bb3049d107645830a2b767ab",
".git/objects/ee/50c8bc853144736839e92dd4d2c0845b1b9c16": "f09fb473d2e6e38b8fd4ff1db529ebd5",
".git/objects/f1/f69a85a4656da6511e196a9f4bd593f374c3f6": "8a1d1736ebdec750cd79788d01a1bf28",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/cab66f50c9aa76975b1f38683a943bb0e062e8": "961734ec0621c27cfb9b38af87ef2e31",
".git/objects/f5/b08387feee8ecbeb74c65472c5f3c3ebb38672": "2deb7ccb189dfa62925e630374408e69",
".git/objects/fd/62b81db0ca40564180a14b123edf401fd28dc1": "2eb19f8c039763799da7588c67218056",
".git/refs/heads/main": "7282ee3c2880ed4a640305a5f3e2a6b8",
".git/refs/remotes/web/main": "7282ee3c2880ed4a640305a5f3e2a6b8",
"assets/AssetManifest.bin": "23c84005f975f5c6f4ffe529154b077f",
"assets/AssetManifest.bin.json": "afa266c8ca0847caf2af8b996835aa5d",
"assets/AssetManifest.json": "a2a80cc61f744bc8a9d4a47797ab2299",
"assets/assets/images/LogoRuedaSerranoFondoBlanco.png": "b2288c0863cbc13f492368c6269de0fe",
"assets/assets/images/LogoRuedaSerranoFondoBlanco2.png": "e0efe87f16e62d3be1e1670c98ef68b9",
"assets/assets/images/LogoRuedaSerranoFondoTransparente.png": "4ceae50c0e961ea1465dc35ae0fb6903",
"assets/assets/images/LogoRuedaSerranoFondoTransparente2.png": "486ab8d66d1a2e1928ae10b4122a76dd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "704b04e32c686a1a1ef94cfbea539854",
"assets/NOTICES": "0bea83e90bc41492e231e42e65aa687f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "dc38c5fd5c2548dcbd983551aad822c9",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "1dd52a464a1167625ce3cb4217a3ddd7",
"icons/Icon-192.png": "373a0678fb0bdfc6e1f71e98ef6c4978",
"icons/Icon-512.png": "0a6c325da8dd1bb3d84b9407b6a0238a",
"icons/Icon-maskable-192.png": "373a0678fb0bdfc6e1f71e98ef6c4978",
"icons/Icon-maskable-512.png": "0a6c325da8dd1bb3d84b9407b6a0238a",
"index.html": "b0fcd746bff412b05b095e6f7381de60",
"/": "b0fcd746bff412b05b095e6f7381de60",
"main.dart.js": "95b62c44587d26583ed99e440f615dc0",
"manifest.json": "3fa6e74216f78bff4328dac46d34ebfd",
"version.json": "f36ed7a4cff3bc091f8c98b90eab077c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
