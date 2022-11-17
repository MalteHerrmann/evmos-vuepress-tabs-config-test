The [Evmos docs](https://docs.evmos.org) are being built with `vuepress`. Using the [vuepress-plugin-element-tabs](https://github.com/bidoubiwa/vuepress-plugin-element-tabs) plugin, there should be tabs showing where we want to offer different informations for different target groups (e.g. for mainnet or testnet).

## Problem description

- the tabs plugin does not work as expected (e.g. [block explorers docs](https://docs.evmos.org/developers/explorers.html#list-of-block-explorers)). 

- The syntax in the corresponding [`.md` file](https://raw.githubusercontent.com/evmos/evmos/63a79e950ad3f036049a5883b553b26bf405647a/docs/developers/explorers.md) is correct, as compared to the [plugin docs](https://github.com/bidoubiwa/vuepress-plugin-element-tabs).

- To serve a reduced version of the docs using the configuration from the Evmos repo, which does NOT work as expected, one can use:
```
 $ cd example_evmos_config
 $ yarn
 $ yarn serve
```

- The minimal example provided here, which is taken from the [plugin docs](https://github.com/bidoubiwa/vuepress-plugin-element-tabs)), runs correctly.
```
 $ cd vuepress-plugin-element-tabs
 $ yarn
 $ yarn dev
```

## Observations

- The Evmos docs are using `node-sass`, which is [deprecated](https://www.npmjs.com/package/node-sass).
- The `cosmos-sdk` ([#13471](https://github.com/cosmos/cosmos-sdk/pull/13471)) and `osmosis` ([#158](https://github.com/osmosis-labs/docs/pull/158)) docs recently migrated from this  `vuepress` setup to [`docusaurus`](https://docusaurus.io/).
- Some other things on the Evmos docs are broken (on the top right corner e.g. there is an invisible dropdown for the version), so it might make sense to follow the pack and migrate as well?


## Working Versions of Evmos

The following versions of Evmos have been tested to see if the docs were built as expected, but none of them worked as of November '22. To revert back to the given tags, I used e.g. `git checkout v9.1.0`.

- Faulty behaviour:
  - v9.1.0: Tabs plugin not working
  - v8.2.3: Tabs plugin not working
  - v7.0.0: 
    - Prints warning during build: `warning "vuepress-plugin-element-tabs > sass-loader@7.3.1" has unmet peer dependency "webpack@^3.0.0 || ^4.0.0".`
    - Only a blank page is shown and nothing else (this has to do with [this slack conversation](https://evmos.slack.com/archives/C02TY1QBAUE/p1657695113285759?thread_ts=1657547820.483539&cid=C02TY1QBAUE)).
  - v6.0.4: same...


## Output from Evmos docs build

```
 $ yarn install
yarn install v1.22.19
warning Resolution field "@evmos/docs-ui@*" has an invalid version entry and may be ignored
warning Resolution field "node-sass@*" has an invalid version entry and may be ignored
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "vuepress-theme-cosmos > stylus-loader@7.1.0" has incorrect peer dependency "webpack@^5.0.0".
warning "vuepress-theme-cosmos > vuepress-plugin-sitemap@2.3.1" has unmet peer dependency "chalk@^2.0.0".
warning "vuepress-theme-cosmos > vuepress-plugin-sitemap@2.3.1" has unmet peer dependency "commander@^2.0.0".
[4/4] 🔨  Building fresh packages...
✨  Done in 60.10s.


 $ yarn serve
yarn run v1.22.19
$ ./pre.sh
Cloning into 'ethermint'...
remote: Enumerating objects: 17406, done.
remote: Counting objects: 100% (242/242), done.
remote: Compressing objects: 100% (144/144), done.
remote: Total 17406 (delta 120), reused 184 (delta 92), pack-reused 17164
Receiving objects: 100% (17406/17406), 32.84 MiB | 12.02 MiB/s, done.
Resolving deltas: 100% (11299/11299), done.
Cloning into 'cosmos-sdk'...
remote: Enumerating objects: 173871, done.
remote: Counting objects: 100% (68/68), done.
remote: Compressing objects: 100% (56/56), done.
remote: Total 173871 (delta 18), reused 33 (delta 11), pack-reused 173803
Receiving objects: 100% (173871/173871), 511.55 MiB | 8.56 MiB/s, done.
Resolving deltas: 100% (116877/116877), done.
mv: rename cosmos-sdk/x/auth/spec/ to ./modules/auth: No such file or directory
mv: rename cosmos-sdk/x/bank/spec/ to ./modules/bank: No such file or directory
mv: rename cosmos-sdk/x/crisis/spec/ to ./modules/crisis: No such file or directory
mv: rename cosmos-sdk/x/distribution/spec/ to ./modules/distribution: No such file or directory
mv: rename cosmos-sdk/x/evidence/spec/ to ./modules/evidence: No such file or directory
mv: rename cosmos-sdk/x/gov/spec/ to ./modules/gov: No such file or directory
mv: rename cosmos-sdk/x/slashing/spec/ to ./modules/slashing: No such file or directory
mv: rename cosmos-sdk/x/staking/spec/ to ./modules/staking: No such file or directory
mv: rename cosmos-sdk/x/upgrade/spec/ to ./modules/upgrade: No such file or directory
Cloning into 'ibc-go'...
remote: Enumerating objects: 25088, done.
remote: Counting objects: 100% (1066/1066), done.
remote: Compressing objects: 100% (408/408), done.
remote: Total 25088 (delta 715), reused 938 (delta 636), pack-reused 24022
Receiving objects: 100% (25088/25088), 21.49 MiB | 9.22 MiB/s, done.
Resolving deltas: 100% (17001/17001), done.
mv: rename ibc-go/modules/apps/transfer/spec/ to ./modules/transfer: No such file or directory
$ trap 'exit 0' SIGINT; vuepress dev --no-cache
wait Extracting site metadata...
tip Apply theme vuepress-theme-cosmos ...
warning [vuepress] Cannot resolve Layout.vue file in
 /Users/malte/dev/go/evmos/docs/node_modules/vuepress-theme-cosmos
/Users/malte/dev/go/evmos/docs/node_modules/vuepress-theme-cosmos/layouts,
 fallback to default layout: /Users/malte/dev/go/evmos/docs/node_modules/@vuepress/core/lib/node/theme-api/Layout.fallback.vue
warning An error was encountered in plugin "vuepress-plugin-element-tabs"
tip Apply plugin container (i.e. "vuepress-plugin-container") ...
tip Apply plugin @vuepress/register-components (i.e. "@vuepress/plugin-register-components") ...
tip Apply plugin vuepress-plugin- ...
tip Apply plugin @vuepress/google-analytics (i.e. "@vuepress/plugin-google-analytics") ...
Error in processing frontmatter: $page.content is <!--
order: 6 -->

# Events

The `x/feemarket` module em... [SUPER LONG OUTPUT HERE]

tip Clean cache...


✔ Client
  Compiled successfully in 12.15s

ℹ ｢wds｣: Project is running at http://0.0.0.0:8081/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /Users/malte/dev/go/evmos/docs/.vuepress/public
ℹ ｢wds｣: 404s will fallback to /index.html
success [15:15:44] Build 76b8d9 finished in 12155 ms!
> VuePress dev server listening at http://localhost:8081/

✔ Client
  Compiled successfully in 201.46ms
success [15:15:45] Build c562b5 finished in 202 ms! ( http://localhost:8081/ )

```

## Output from minimal example build (from plugin docs)

```
 $ yarn install
yarn install v1.22.19
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning " > sass-loader@7.3.1" has unmet peer dependency "webpack@^3.0.0 || ^4.0.0".
[4/4] 🔨  Building fresh packages...
[-/3] ⠠ waiting...
[2/3] ⠠ fsevents
warning Error running install script for optional dependency: "/Users/malte/Desktop/vuepress-test/vuepress-plugin-element-tabs/node_modules/fsevents: Command failed.
Exit code: 1
Command: node-gyp rebuild
Arguments:
Directory: /Users/malte/Desktop/vuepress-test/vuepress-plugin-element-tabs/node_modules/fsevents
Output:
gyp info it worked if it ends with ok
gyp info using node-gyp@9.1.0
gyp info using node@18.11.0 | darwin | arm64
gyp info find Python using Python version 3.10.8 found at \"/opt/homebrew/opt/python@3.10/bin/python3.10\"
gyp info spawn /opt/homebrew/opt/python@3.10/bin/python3.10
gyp info spawn args [
gyp info spawn args   '/opt/homebrew/Cellar/node/18.11.0/libexec/lib/node_modules/npm/node_modules/node-gyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/Users/malte/Desktop/vuepress-test/vuepress-plugin-element-tabs/node_modules/fsevents/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/opt/homebrew/Cellar/node/18.11.0/libexec/lib/node_modules/npm/node_modules/node-gyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/Users/malte/Library/Caches/node-gyp/18.11.0/include/node/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/Users/malte/Library/Caches/node-gyp/18.11.0',
gyp info spawn args   '-Dnode_gyp_dir=/opt/homebrew/Cellar/node/18.11.0/libexec/lib/node_modules/npm/node_modules/node-gyp',
gyp info spawn args   '-Dnode_lib_file=/Users/malte/Library/Caches/node-gyp/18.11.0/<(target_arch)/node.lib',
gyp info spawn args   '-Dmodule_root_dir=/Users/malte/Desktop/vuepress-test/vuepress-plugin-element-tabs/node_modules/fsevents',
gyp info spawn args   '-Dnode_engine=v8',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.'
gyp info spawn args ]
gyp info spawn make
gyp info spawn args [ 'BUILDTYPE=Release', '-C', 'build' ]
  SOLINK_MODULE(target) Release/.node
  CXX(target) Release/obj.target/fse/fsevents.o
In file included from ../fsevents.cc:6:
../../nan/nan.h:2536:8: warning: 'SetAccessor' is deprecated: Do signature check in accessor [-Wdeprecated-declarations]
  tpl->SetAccessor(
       ^
/Users/malte/Library/Caches/node-gyp/18.11.0/include/node/v8-template.h:837:3: note: 'SetAccessor' has been explicitly marked deprecated here
  V8_DEPRECATED(\"Do signature check in accessor\")
  ^
/Users/malte/Library/Caches/node-gyp/18.11.0/include/node/v8config.h:460:35: note: expanded from macro 'V8_DEPRECATED'
# define V8_DEPRECATED(message) [[deprecated(message)]]
                                  ^
In file included from ../fsevents.cc:6:
In file included from ../../nan/nan.h:2884:
../../nan/nan_typedarray_contents.h:34:43: error: no member named 'GetContents' in 'v8::ArrayBuffer'
      data   = static_cast<char*>(buffer->GetContents().Data()) + byte_offset;
                                  ~~~~~~~~^
1 warning and 1 error generated.
make: *** [Release/obj.target/fse/fsevents.o] Error 1
gyp ERR! build error
gyp ERR! stack Error: `make` failed with exit code: 2
gyp ERR! stack     at ChildProcess.onExit (/opt/homebrew/Cellar/node/18.11.0/libexec/lib/node_modules/npm/node_modules/node-gyp/lib/build.js:201:23)
gyp ERR! stack     at ChildProcess.emit (node:events:513:28)
gyp ERR! stack     at ChildProcess._handle.onexit (node:internal/child_process:291:12)
gyp ERR! System Darwin 21.6.0
gyp ERR! command \"/opt/homebrew/Cellar/node/18.11.0/bin/node\" \"/opt/homebrew/Cellar/node/18.11.0/libexec/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js\" \"rebuild\"
gyp ERR! cwd /Users/malte/Desktop/vuepress-test/vuepress-plugin-element-tabs/node_modules/fsevents
gyp ERR! node -v v18.11.0
gyp ERR! node-gyp -v v9.1.0
✨  Done in 4.55s.


 $ yarn dev
yarn run v1.22.19
$ vuepress dev docs --temp .temp
wait Extracting site metadata...
/Users/malte/Desktop/vuepress-test/vuepress-plugin-element-tabs/index.js
tip Apply theme @vuepress/theme-default ...
tip Apply plugin container (i.e. "vuepress-plugin-container") ...
tip Apply plugin @vuepress/last-updated (i.e. "@vuepress/plugin-last-updated") ...
tip Apply plugin @vuepress/register-components (i.e. "@vuepress/plugin-register-components") ...
tip Apply plugin @vuepress/active-header-links (i.e. "@vuepress/plugin-active-header-links") ...
tip Apply plugin @vuepress/search (i.e. "@vuepress/plugin-search") ...
tip Apply plugin @vuepress/nprogress (i.e. "@vuepress/plugin-nprogress") ...
tip Apply plugin vuepress-plugin-index ...

✔ Client
  Compiled successfully in 2.13s

ℹ ｢wds｣: Project is running at http://0.0.0.0:8080/
ℹ ｢wds｣: webpack output is served from /vuepress-plugin-tabs/
ℹ ｢wds｣: Content not from webpack is served from /Users/malte/Desktop/vuepress-test/vuepress-plugin-element-tabs/docs/.vuepress/public
ℹ ｢wds｣: 404s will fallback to /index.html
Browserslist: caniuse-lite is outdated. Please run next command `yarn upgrade`
(node:82350) Warning: Accessing non-existent property 'lineno' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
(node:82350) Warning: Accessing non-existent property 'column' of module exports inside circular dependency
(node:82350) Warning: Accessing non-existent property 'filename' of module exports inside circular dependency
(node:82350) Warning: Accessing non-existent property 'lineno' of module exports inside circular dependency
(node:82350) Warning: Accessing non-existent property 'column' of module exports inside circular dependency
(node:82350) Warning: Accessing non-existent property 'filename' of module exports inside circular dependency
success [15:48:53] Build 829cc9 finished in 2129 ms!
> VuePress dev server listening at http://localhost:8080/vuepress-plugin-tabs/

✔ Client
  Compiled successfully in 85.13ms
success [15:48:53] Build 9a4b69 finished in 86 ms! ( http://localhost:8080/vuepress-plugin-tabs/ )


```

## Output from minimal example (based on Evmos)

```
 $ yarn install
yarn install v1.22.19
warning Resolution field "@evmos/docs-ui@*" has an invalid version entry and may be ignored
warning Resolution field "node-sass@*" has an invalid version entry and may be ignored
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "vuepress-theme-cosmos > stylus-loader@7.1.0" has incorrect peer dependency "webpack@^5.0.0".
warning "vuepress-theme-cosmos > vuepress-plugin-sitemap@2.3.1" has unmet peer dependency "chalk@^2.0.0".
warning "vuepress-theme-cosmos > vuepress-plugin-sitemap@2.3.1" has unmet peer dependency "commander@^2.0.0".

 $ yarn serve
yarn run v1.22.19
$ trap 'exit 0' SIGINT; vuepress dev --no-cache
wait Extracting site metadata...
tip Apply theme vuepress-theme-cosmos ...
warning [vuepress] Cannot resolve Layout.vue file in
 /Users/malte/Desktop/vuepress-test/example_evmos_config/node_modules/vuepress-theme-cosmos
/Users/malte/Desktop/vuepress-test/example_evmos_config/node_modules/vuepress-theme-cosmos/layouts,
 fallback to default layout: /Users/malte/Desktop/vuepress-test/example_evmos_config/node_modules/@vuepress/core/lib/node/theme-api/Layout.fallback.vue
warning An error was encountered in plugin "vuepress-plugin-element-tabs"
tip Apply plugin container (i.e. "vuepress-plugin-container") ...
tip Apply plugin @vuepress/register-components (i.e. "@vuepress/plugin-register-components") ...
tip Apply plugin vuepress-plugin- ...
tip Apply plugin @vuepress/google-analytics (i.e. "@vuepress/plugin-google-analytics") ...
tip Clean cache...




ℹ ｢wds｣: Project is running at http://0.0.0.0:8081/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /Users/malte/Desktop/vuepress-test/example_evmos_config/.vuepress/public
ℹ ｢wds｣: 404s will fallback to /index.html
[BABEL] Note: The code generator has deoptimised the styling of /Users/malte/Desktop/vuepress-test/example_evmos_config/node_modules/lodash/lodash.js as it exceeds the max of 500KB.
success [15:41:36] Build 95c681 finished in 5377 ms!
> VuePress dev server listening at http://localhost:8081/

✔ Client
  Compiled successfully in 154.58ms
success [15:41:37] Build 2b088f finished in 155 ms! ( http://localhost:8081/ )
```




