variable "region" {
  type        = string
  description = "The region of the project"
  default     = "us-east-1"
}

variable "name" {
  type        = string
  description = "The name of project resources"
  default     = "simple-api-example"
}

variable "environment" {
  type        = string
  description = "The name of environment"
  default     = "dev"
}

variable "cidr" {
  description = "The CIDR block for the VPC."
  default     = "10.0.0.0/16"
}

variable "public_subnets" {
  description = "a list of CIDRs for private subnets in your VPC, must be set if the cidr variable is defined, needs to have as many elements as there are availability zones"
  default     = ["10.0.0.0/20", "10.0.16.0/20"]
}

variable "private_subnets" {
  description = "a list of CIDRs for private subnets in your VPC, must be set if the cidr variable is defined, needs to have as many elements as there are availability zones"
  # default     = ["10.0.144.0/20", "10.0.128.0/20"]
  default = []
}

variable "availability_zones" {
  type    = list(string)
  default = ["us-east-1a", "us-east-1b"]
}

variable "container_port" {
  type    = number
  default = 80
}

variable "host_port" {
  type    = number
  default = 80
}

variable "container_image" {
  type     = string
  nullable = false
}
