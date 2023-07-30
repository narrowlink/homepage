---
sidebar_position: 1
description: Installation instructions for Narrowlink
keywords: [Installation, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel, Rust]
---

# Installation

:::info
Our installation instructions are currently limited to the nightly version of Narrowlink. However, we are actively working on preparing the stable version of Narrowlink for release. Once the stable version is ready, we will switch to using it for our installation instructions.
:::

Narrowlink can be installed in the following ways:

- [Installing via Cargo (Recommended)](#cargo)
- [Downloading the precompiled binary](#precompiled-binary)
- [Installing from the source code](#source-code)

Each component of Narrowlink has an individual binary and package name with specific functionalities:

- `narrowlink` represents the [Client] component
- `narrowlink-agent` represents the [Agent] component
- `narrowlink-gateway` represents the [Gateway] component.
- `narrowlink-token-generator` represents the [Token Generator] component.

## Cargo

Cargo is a package manager for the Rust programming language. It simplifies the process of managing Rust packages and their dependencies.

### Prerequisite

To install Narrowlink using Cargo, you must first install Cargo. On macOS, Linux, or another Unix-like system, you can run the following command in your terminal:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

If you're using Windows, please refer to the "[Other Installation Methods]" section on the Rust website.

### All Components
```bash
cargo install --git https://git.narrow.link/gateway
cargo install --git https://git.narrow.link/agent
cargo install --git https://git.narrow.link/client
cargo install --git https://git.narrow.link/token-generator
```
<!-- ```bash
cargo install narrowlink-client narrowlink-agent narrowlink-gateway narrowlink-token-generator
```

You can also install each component individually:

### Agent

```bash
cargo install narrowlink-client
``` -->

### Updating

To update Narrowlink, you can add ```--force``` to the end of the command to force Cargo to reinstall the package:

<!-- ```bash
cargo install --force narrowlink-client narrowlink-agent narrowlink-gateway narrowlink-token-generator
``` -->

```bash
cargo install --force --git https://git.narrow.link/gateway
cargo install --force --git https://git.narrow.link/agent
cargo install --force --git https://git.narrow.link/client
cargo install --force --git https://git.narrow.link/token-generator
```

<!-- or you can use ([cargo-update]) command to update all installed packages.

```bash
cargo install cargo-update
```

```bash
cargo install-update narrowlink-client narrowlink-agent narrowlink-gateway narrowlink-token-generator
``` -->

## Precompiled Binary
If you prefer to use precompiled binaries, they are available on the GitHub release page. You can download the binaries from the links below that refer to the latest release. Currently, we provide binaries for Linux, macOS, and Windows platforms for both ARM and x86 architectures. However, it's worth noting that Narrowlink is not limited to these platforms - you can build for other targets using alternative installation methods.

:::caution Windows users 
Windows security features may prevent you from running the downloaded binaries. If you encounter this issue, you can either disable the security features or build the binaries yourself. This issue happens because the binaries are not signed. We are working on signing the binaries to prevent this issue.
:::

### Gateway

||x64|Arm64 | x86 | Arm32  |
|---|:-:|:-:|:-:|:-:|
|Linux|[Download](https://github.com/narrowlink/gateway/releases/download/Nightly/narrowlink-gateway-x86_64-unknown-linux-musl)|[Download](https://github.com/narrowlink/gateway/releases/download/Nightly/narrowlink-gateway-aarch64-unknown-linux-musl)|[Download](https://github.com/narrowlink/gateway/releases/download/Nightly/narrowlink-gateway-i686-unknown-linux-musl)|[Download](https://github.com/narrowlink/gateway/releases/download/Nightly/narrowlink-gateway-arm-unknown-linux-musleabi)|
|MacOS|[Download](https://github.com/narrowlink/gateway/releases/download/Nightly/narrowlink-gateway-x86_64-apple-darwin)|[Download](https://github.com/narrowlink/gateway/releases/download/Nightly/narrowlink-gateway-aarch64-apple-darwin)|N/A|N/A|
|Windows|[Download](https://github.com/narrowlink/gateway/releases/download/Nightly/narrowlink-gateway-x86_64-pc-windows-msvc.exe)|Soon|[Download](https://github.com/narrowlink/gateway/releases/download/Nightly/narrowlink-gateway-i686-pc-windows-msvc.exe)|N/A|

### Agent

||x64|Arm64 | x86 | Arm32  |
|---|:-:|:-:|:-:|:-:|
|Linux|[Download](https://github.com/narrowlink/agent/releases/download/Nightly/narrowlink-agent-x86_64-unknown-linux-musl)|[Download](https://github.com/narrowlink/agent/releases/download/Nightly/narrowlink-agent-aarch64-unknown-linux-musl)|[Download](https://github.com/narrowlink/agent/releases/download/Nightly/narrowlink-agent-i686-unknown-linux-musl)|[Download](https://github.com/narrowlink/agent/releases/download/Nightly/narrowlink-agent-arm-unknown-linux-musleabi)|
|MacOS|[Download](https://github.com/narrowlink/agent/releases/download/Nightly/narrowlink-agent-x86_64-apple-darwin)|[Download](https://github.com/narrowlink/agent/releases/download/Nightly/narrowlink-agent-aarch64-apple-darwin)|N/A|N/A|
|Windows|[Download](https://github.com/narrowlink/agent/releases/download/Nightly/narrowlink-agent-x86_64-pc-windows-msvc.exe)|Soon|[Download](https://github.com/narrowlink/agent/releases/download/Nightly/narrowlink-agent-i686-pc-windows-msvc.exe)|N/A|

### Client

||x64|Arm64 | x86 | Arm32  |
|---|:-:|:-:|:-:|:-:|
|Linux|[Download](https://github.com/narrowlink/client/releases/download/Nightly/narrowlink-x86_64-unknown-linux-musl)|[Download](https://github.com/narrowlink/client/releases/download/Nightly/narrowlink-aarch64-unknown-linux-musl)|[Download](https://github.com/narrowlink/client/releases/download/Nightly/narrowlink-i686-unknown-linux-musl)|[Download](https://github.com/narrowlink/client/releases/download/Nightly/narrowlink-arm-unknown-linux-musleabi)|
|MacOS|[Download](https://github.com/narrowlink/client/releases/download/Nightly/narrowlink-x86_64-apple-darwin)|[Download](https://github.com/narrowlink/client/releases/download/Nightly/narrowlink-aarch64-apple-darwin)|N/A|N/A|
|Windows|[Download](https://github.com/narrowlink/client/releases/download/Nightly/narrowlink-x86_64-pc-windows-msvc.exe)|Soon|[Download](https://github.com/narrowlink/client/releases/download/Nightly/narrowlink-i686-pc-windows-msvc.exe)|N/A|


### Token Generator

||x64|Arm64 | x86 | Arm32  |
|---|:-:|:-:|:-:|:-:|
|Linux|[Download](https://github.com/narrowlink/token-generator/releases/download/Nightly/narrowlink-token-generator-x86_64-unknown-linux-musl)|[Download](https://github.com/narrowlink/token-generator/releases/download/Nightly/narrowlink-token-generator-aarch64-unknown-linux-musl)|[Download](https://github.com/narrowlink/token-generator/releases/download/Nightly/narrowlink-token-generator-i686-unknown-linux-musl)|[Download](https://github.com/narrowlink/token-generator/releases/download/Nightly/narrowlink-token-generator-arm-unknown-linux-musleabi)|
|MacOS|[Download](https://github.com/narrowlink/token-generator/releases/download/Nightly/narrowlink-token-generator-x86_64-apple-darwin)|[Download](https://github.com/narrowlink/token-generator/releases/download/Nightly/narrowlink-token-generator-aarch64-apple-darwin)|N/A|N/A|
|Windows|[Download](https://github.com/narrowlink/token-generator/releases/download/Nightly/narrowlink-token-generator-x86_64-pc-windows-msvc.exe)|Soon|[Download](https://github.com/narrowlink/token-generator/releases/download/Nightly/narrowlink-token-generator-i686-pc-windows-msvc.exe)|N/A|


## Source Code

If you prefer to obtain pre-release versions of Narrowlink or modify the code before building, you can download the source code from [Narrowlink's GitHub repository] and build and install it yourself. This installation method requires the Git and Cargo commands to be installed on your system.



[Client]: /docs/client/
[Agent]: /docs/agent/
[Gateway]: /docs/gateway/
[Token Generator]: /docs/token-generator/
[Other Installation Methods]: https://forge.rust-lang.org/infra/other-installation-methods.html
[cargo-update]: https://github.com/nabijaczleweli/cargo-update
[Narrowlink's GitHub repository]: https://git.narrow.link/
