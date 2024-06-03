{pkgs ? import <nixpkgs> {}}:
pkgs.mkShellNoCC {
  name = "tcmh's shell";
  buildInputs = with pkgs; [
    nodejs_22
    corepack_22
    nodePackages_latest.svelte-check
    nodePackages.typescript-language-server
    nodePackages_latest.svelte-language-server
    vscode-langservers-extracted
  ];
   shellHook = ''
    pnpm i
  '';
}

