USE [AirbnbClone]
GO

/****** Object:  Table [dbo].[Icons]    Script Date: 31/07/2024 10:09:17 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Icons](
	[IconsId] [int] NOT NULL,
	[IconsName] [varchar](50) NOT NULL,
	[IconsDesigns] [varchar](50) NOT NULL
) ON [PRIMARY]
GO