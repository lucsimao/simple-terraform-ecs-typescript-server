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

variable "region" {
  type        = string
  description = "The aws region of the project"
  default     = "us-east-1"
}

variable "environment" {
  type        = string
  description = "The name of environment"
  default     = "dev"
}

variable "ecr_lifecycle" {
  type    = number
  default = 10
}
