
## 開発環境

pnpm: 9.6.0
node: v20.16.0

```text
├── apps
│   ├── sample
│   └── sample-2
└── packages
    ├── ui
    ├── tsconfig
    └── api-client
```

## 開発環境構築

### pnpmのインストール

pnpmを使っているのでお好きな方法でpnpmをインストールしてください

https://pnpm.io/ja/installation

### node.jsのインストール、設定

[anyenv](https://anyenv.github.io/) や [asdf](https://asdf-vm.com/) などのパッケージバージョンマネージャーを利用して必要なNodeのバージョンをインストール、設定してください。

### セットアップ、起動

```shell
% pnpm install
```

```shell
% pnpm dev
```

### 環境構築が失敗する場合

pnpm, Node.jsのバージョンもあっていて失敗する場合はクリアしてから再度インストールをしてください

```shell
% pnpm clean
% pnpm install
```

## ライブラリを追加する方法

```shell
% cd apps/<application>
% pnpm add <package name> or pnpm add -D <package name>
```

`pnpm add <package name> -w` とすると全てにインストールできますが、バージョン管理などが大変になる可能性があるのでなるべくアプリケーションごとにインストールするのがいいと思います。

### パッケージの追加方法

packages配下に任意のパッケージを追加、 `package.json` の `name` に利用したいパッケージ名を設定。
`@sample/eslint-config` など

パッケージを追加した後は、アプリケーションとパッケージを紐づけるために下記コマンドを実行してください。

```shell
% cd apps/<アプリケーション>
% pnpm add ../../packages/<パッケージ名>
```

### アプリケーション追加

開発環境時には下記コマンドを実行し、環境構築をしましたので参考にしてください。

```shell
% cd apps
% pnpm create vite@latest <アプリケーション名> -- --template react-ts
```
