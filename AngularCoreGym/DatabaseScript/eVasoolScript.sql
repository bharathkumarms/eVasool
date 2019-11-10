USE [AngularGYMDB]
GO

/****** Object:  Table [dbo].[PropertyItem]    Script Date: 11/10/2019 9:09:20 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PropertyItem](
	[PropertyItemId] [int] NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[Description] [nvarchar](1000) NULL,
	[Area] [nvarchar](100) NULL,
	[AddressLine1] [nvarchar](1000) NULL,
	[AddressLine2] [nvarchar](1000) NULL,
	[City] [nvarchar](100) NULL,
	[Country] [nvarchar](100) NULL,
	[Zip] [nvarchar](100) NULL,
	[LeaseDueDate] [date] NULL,
	[NextDueDate] [date] NULL,
	[IsActive] [bit] NULL,
	[TotalLeaseAmount] [decimal](18, 0) NULL,
	[InstallmentAmount] [decimal](18, 0) NULL,
	[InstallementPaid] [int] NULL,
	[Notes] [nvarchar](1000) NULL,
	[Phone] [nvarchar](50) NULL,
	[Email] [nvarchar](100) NULL,
	[CreatedDate] [date] NULL,
	[CreatedBy] [nvarchar](100) NULL,
	[ModifiedDate] [date] NULL,
	[ModifiedBy] [nvarchar](100) NULL,
 CONSTRAINT [PK_PropertyItem] PRIMARY KEY CLUSTERED 
(
	[PropertyItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


