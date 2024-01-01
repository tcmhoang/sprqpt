{
  description = "A nix flake for building my blog";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };
  outputs = {
    self,
    nixpkgs,
    ...
  }: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {
      inherit system;
    };
  in
    with pkgs; {
      formatter.x86_64-linux = nixpkgs.legacyPackages.x86_64-linux.alejandra;

      devShells.x86_64-linux.default = mkShell {
	nativeBuildInputs = [nodejs_21];
        buildInputs = [
	corepack_21
	git-lfs
	nodePackages_latest.svelte-check
	nodePackages.typescript-language-server
	nodePackages_latest.svelte-language-server
	vscode-langservers-extracted
	fish
	];
	shellHook = ''
		pnpm i
		fish
	'';
      };
    };
}
