---
sidebar_position: 1
description: Installation instructions for Narrowlink
keywords: [Installation, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel, Rust]
---

# Installation

Narrowlink can be installed in the following ways:

- Installing via Cargo (Recommended)
 <!-- - Downloading the precompiled binary from the website -->
- Installing from the source code

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
cargo install --git https://git.narrow.link/agent
cargo install --git https://git.narrow.link/gateway
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
cargo install --force --git https://git.narrow.link/agent
cargo install --force --git https://git.narrow.link/gateway
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

<!-- ## Precompiled Binary
If you prefer to use precompiled binaries, they are available on the GitHub release page. Currently, we provide binaries for Linux, macOS, and Windows platforms for both ARM and x86 architectures. However, it's worth noting that Narrowlink is not limited to these platforms - you can build for other targets using alternative installation methods.
### Client
```https://git.narrow.link/client/releases```
### Agent
```https://git.narrow.link/agent/releases```
### Gateway
```https://git.narrow.link/gateway/releases``` -->

## Source Code

If you prefer to obtain pre-release versions of Narrowlink or modify the code before building, you can download the source code from [Narrowlink's GitHub repository] and build and install it yourself. This installation method requires the Git and Cargo commands to be installed on your system.



[Client]: /docs/client/
[Agent]: /docs/agent/
[Gateway]: /docs/gateway/
[Token Generator]: /docs/token-generator/
[Other Installation Methods]: https://forge.rust-lang.org/infra/other-installation-methods.html
[cargo-update]: https://github.com/nabijaczleweli/cargo-update
[Narrowlink's GitHub repository]: https://git.narrow.link/
