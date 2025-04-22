FROM debian:bookworm-slim

ARG user_id=1000
ARG group_id=1000
ENV SHELL /bin/bash

# Install required packages for VSCode + general development
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    build-essential \
    pkg-config \
    libx11-dev \
    libx11-xcb-dev \
    libxkbfile-dev \
    libnotify-bin \
    libkrb5-dev \
    xdg-utils \
    libssl-dev \
    curl \
    ca-certificates \
    git-core \
    sudo \
    python3 \
    && rm -rf /var/lib/apt/lists/*

# Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
  && apt-get install -y nodejs

ENV NODE_OPTIONS="--max-old-space-size=4096"


# Create a developer user
RUN groupadd --gid $group_id developer && useradd --uid $user_id --gid $group_id -m developer && \
    echo developer ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/developer && \
    chmod 0440 /etc/sudoers.d/developer

USER developer
WORKDIR /home/developer

# RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --target wasm32-unknown-unknown
# ENV PATH=/home/developer/.cargo/bin:$PATH
# RUN cargo install --git https://github.com/rustwasm/wasm-bindgen.git  --tag 0.2.100 wasm-bindgen-cli
