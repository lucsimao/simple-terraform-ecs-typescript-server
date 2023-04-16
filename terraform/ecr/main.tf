provider "aws" {
  region = var.region
}

terraform {
  cloud {
    organization = "lucsimao"

    workspaces {
      name = "simple-typescript-server-ecr"
    }
  }
}
