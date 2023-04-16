resource "aws_cloudwatch_log_group" "log_group" {
  name = "${var.name}-${var.environment}-logs"

  tags = {
    Application = var.name
    Environment = var.environment
  }
}
