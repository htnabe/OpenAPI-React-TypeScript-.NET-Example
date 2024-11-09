# Node.jsと必要なツールを一括インストール
FROM mcr.microsoft.com/devcontainers/base:ubuntu-22.04
RUN apt-get update && apt-get install -y \
  curl dotnet-sdk-8.0\
  && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
  && apt-get install -y nodejs \
  && npm install -g yarn  \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace
